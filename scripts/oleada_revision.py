#!/usr/bin/env python3
"""Prepara la hoja de una oleada de revisión clínica a partir de data/estructuras.json y
data/nombres-nl-pap.json: una fila por nombre inglés de los sistemas indicados que siga sin revisar en
algún idioma, con el contexto (sistema, español, latín, pista neerlandesa si la hay) y las columnas
de trabajo vacías (TRABAJO). La hoja es un archivo de trabajo fuera del repositorio: lleva el nombre
del revisor, y los datos que importan vuelven al JSON con scripts/aplicar_revision.py --csv <hoja>.
Uso: python3 scripts/oleada_revision.py --sistemas esqueletico muscular --salida oleada-1.csv
     python3 scripts/oleada_revision.py --listar          (cuántos nombres quedan por sistema)
"""
import argparse, csv, json, os, sys
from collections import Counter

AQUI = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(os.path.dirname(AQUI), 'data')
CONTEXTO = ('sistema', 'ingles', 'espanol', 'latin', 'neerlandes', 'fuente_nl', 'nl_alternativa', 'papiamento', 'fuente_pap')
TRABAJO = ('ok_nl', 'ok_pap', 'correccion_nl', 'correccion_pap', 'revisor')

def filas_pendientes():
    """Una fila por nombre inglés (primer sistema en que aparece), solo las que faltan por revisar."""
    m = json.load(open(os.path.join(DATA, 'estructuras.json'), encoding='utf-8'))
    tabla = json.load(open(os.path.join(DATA, 'nombres-nl-pap.json'), encoding='utf-8'))
    vistos = set(); out = []
    for s in m['systems']:
        for e in s['structures']:
            t = tabla.get(e['en'])
            if e['en'] in vistos or not t: continue
            vistos.add(e['en'])
            if t.get('nl_fuente') == 'revisado' and t.get('pap_fuente') == 'revisado': continue
            out.append({'sistema': s['key'], 'ingles': e['en'], 'espanol': e.get('es', ''), 'latin': e.get('la', ''),
                        'neerlandes': t.get('nl', ''), 'fuente_nl': t.get('nl_fuente', ''), 'nl_alternativa': t.get('nl_alternativa', ''),
                        'papiamento': t.get('pap', ''), 'fuente_pap': t.get('pap_fuente', '')})
    return out

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--sistemas', nargs='*', default=[], help='claves de sistema (esqueletico, muscular, …)')
    ap.add_argument('--salida', help='CSV de salida (separador ;)')
    ap.add_argument('--listar', action='store_true')
    a = ap.parse_args()
    filas = filas_pendientes()
    if a.listar or not a.salida:
        c = Counter(f['sistema'] for f in filas)
        for s, n in sorted(c.items()): print(f'{s:16} {n} nombres por revisar')
        print(f'{"total":16} {sum(c.values())}')
        return 0
    sel = [f for f in filas if f['sistema'] in set(a.sistemas)]
    if not sel: print('ninguna fila para esos sistemas', file=sys.stderr); return 1
    with open(a.salida, 'w', encoding='utf-8', newline='') as out:
        w = csv.DictWriter(out, fieldnames=CONTEXTO + TRABAJO, delimiter=';'); w.writeheader()
        for f in sel: w.writerow({**f, **{k: '' for k in TRABAJO}})
    print(f'{len(sel)} nombres de {", ".join(a.sistemas)} en {a.salida}')
    return 0

if __name__ == '__main__':
    sys.exit(main())
