#!/usr/bin/env python3
"""Vuelca una hoja de oleada revisada (scripts/oleada_revision.py) en data/nombres-nl-pap.json.
Uso: python3 scripts/aplicar_revision.py --csv <hoja-rellena.csv> [--seco]
Por cada fila: si ok_nl vale "si"/"sí"/"x"/"ok", o hay correccion_nl, el nombre neerlandés pasa a
`nl_fuente: "revisado"` (con la corrección si la hay). Igual para pap. Las filas sin marcar no cambian.
La ficha muestra "revisado clínicamente" para esa fuente y deja de avisar.
Solo escribe el JSON, que es el dato que usa la app. Ejecutar luego scripts/verificar_datos.py.
"""
import argparse, csv, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from oleada_revision import IDIOMAS, TRABAJO  # contrato de la hoja de oleada

AQUI = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(os.path.dirname(AQUI), 'data')
SI = {'si', 'sí', 'x', 'ok', 'yes', 'ja', '1', 'true'}

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--csv', required=True, help='hoja de oleada rellena (scripts/oleada_revision.py)')
    ap.add_argument('--seco', action='store_true', help='solo informa, no escribe')
    a = ap.parse_args()
    tabla_path = os.path.join(DATA, 'nombres-nl-pap.json')
    tabla = json.load(open(tabla_path, encoding='utf-8'))
    cambios = {'nl': 0, 'pap': 0}; desconocidos = []
    with open(a.csv, encoding='utf-8-sig', newline='') as f:  # utf-8-sig: Excel puede anteponer un BOM
        lector = csv.DictReader(f, delimiter=';')
        faltan = [c for c in ('ingles', *TRABAJO) if c not in (lector.fieldnames or [])]
        if faltan: print(f'{a.csv}: no es una hoja de oleada (faltan columnas {faltan}; ¿separador distinto de ";"?)', file=sys.stderr); return 1
        for fila in lector:
            en = (fila.get('ingles') or '').strip()
            if not en: continue
            if en not in tabla: desconocidos.append(en); continue
            for lang in IDIOMAS:
                ok = (fila.get(f'ok_{lang}') or '').strip().lower() in SI
                corr = (fila.get(f'correccion_{lang}') or '').strip()
                if not ok and not corr: continue
                if corr: tabla[en][lang] = corr
                if tabla[en].get(f'{lang}_fuente') != 'revisado' or corr:
                    tabla[en][f'{lang}_fuente'] = 'revisado'; cambios[lang] += 1
    print(f"revisados: nl {cambios['nl']}, pap {cambios['pap']}" + (f" · {len(desconocidos)} nombres del CSV no están en la tabla: {desconocidos[:5]}" if desconocidos else ''))
    if a.seco: return 0
    json.dump(tabla, open(tabla_path, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print('escrito', os.path.relpath(tabla_path))
    return 0

if __name__ == '__main__':
    sys.exit(main())
