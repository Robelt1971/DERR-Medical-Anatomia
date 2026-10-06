#!/usr/bin/env python3
"""Vuelca una hoja de oleada revisada (scripts/oleada_revision.py) en data/nombres-nl-pap.json.
Uso: python3 scripts/aplicar_revision.py --csv <hoja-rellena.csv> [--seco]
Por cada fila: si ok_nl vale "si"/"sí"/"x"/"ok", o hay correccion_nl, el nombre neerlandés pasa a
`nl_fuente: "revisado"` (con la corrección si la hay). Igual para pap. Las filas sin marcar no cambian.
Un nombre que aún no tenía fila en la tabla la estrena si trae corrección (una marca ok sin nombre no
aprueba nada). La ficha muestra "revisado clínicamente" para esa fuente y deja de avisar.
Solo escribe el JSON, que es el dato que usa la app. Ejecutar luego scripts/verificar_datos.py.
"""
import argparse, csv, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from oleada_revision import CLAVE, DATA, IDIOMAS, TRABAJO  # contrato de la hoja de oleada

SI = {'si', 'sí', 'x', 'ok', 'yes', 'ja', '1', 'true'}
REQUERIDAS = (CLAVE,) + tuple(c for c in TRABAJO if c != 'revisor')  # revisor no se lee; puede faltar

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--csv', required=True, help='hoja de oleada rellena (scripts/oleada_revision.py)')
    ap.add_argument('--seco', action='store_true', help='solo informa, no escribe')
    a = ap.parse_args()
    tabla_path = os.path.join(DATA, 'nombres-nl-pap.json')
    tabla = json.load(open(tabla_path, encoding='utf-8'))
    cambios = {l: 0 for l in IDIOMAS}; nuevos = []; sin_nombre = []
    try:
        with open(a.csv, encoding='utf-8-sig', newline='') as f:  # utf-8-sig: Excel puede anteponer un BOM
            lector = csv.DictReader(f, delimiter=';')
            faltan = [c for c in REQUERIDAS if c not in (lector.fieldnames or [])]
            if faltan: print(f'{a.csv}: no es una hoja de oleada (faltan columnas {faltan}; ¿separador distinto de ";"?)', file=sys.stderr); return 1
            for fila in lector:
                en = (fila.get(CLAVE) or '').strip()
                if not en: continue
                for lang in IDIOMAS:
                    ok = (fila.get(f'ok_{lang}') or '').strip().lower() in SI
                    corr = (fila.get(f'correccion_{lang}') or '').strip()
                    if not ok and not corr: continue
                    if en not in tabla and not corr: sin_nombre.append(en); continue
                    if en not in tabla: nuevos.append(en)
                    t = tabla.setdefault(en, {})
                    if corr: t[lang] = corr
                    if t.get(f'{lang}_fuente') != 'revisado' or corr:
                        t[f'{lang}_fuente'] = 'revisado'; cambios[lang] += 1
    except UnicodeDecodeError:
        print(f'{a.csv}: no está en UTF-8; en Excel, guardar como "CSV UTF-8"', file=sys.stderr); return 1
    print('revisados: ' + ', '.join(f'{l} {n}' for l, n in cambios.items())
          + (f' · {len(nuevos)} nombres nuevos en la tabla: {nuevos[:5]}' if nuevos else '')
          + (f' · {len(sin_nombre)} marcas ok sin nombre que aprobar (ignoradas): {sin_nombre[:5]}' if sin_nombre else ''))
    if a.seco: return 0
    json.dump(tabla, open(tabla_path, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print('escrito', os.path.relpath(tabla_path))
    return 0

if __name__ == '__main__':
    sys.exit(main())
