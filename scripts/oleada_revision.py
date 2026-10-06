#!/usr/bin/env python3
"""Prepara la hoja de una oleada de revisión clínica a partir de data/estructuras.json y
data/nombres-nl-pap.json: una fila por nombre inglés de los sistemas indicados que siga sin revisar en
algún idioma (cada nombre se archiva bajo el primer sistema en que aparece), con el contexto (sistema,
español, latín, pista neerlandesa si la hay) y las columnas de trabajo vacías (TRABAJO). La hoja es un
archivo de trabajo fuera del repositorio: lleva el nombre del revisor, y los datos que importan vuelven
al JSON con scripts/aplicar_revision.py --csv <hoja>. Este módulo es el dueño del contrato de la hoja
(IDIOMAS, TRABAJO); aplicar_revision.py lo importa.
Uso: python3 scripts/oleada_revision.py --sistemas esqueletico muscular   (escribe oleada-esqueletico-muscular.csv)
     python3 scripts/oleada_revision.py --listar                           (cuántos nombres quedan por sistema)
"""
import argparse, csv, json, os, sys
from collections import Counter

AQUI = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(os.path.dirname(AQUI), 'data')
IDIOMAS = ('nl', 'pap')
TRABAJO = tuple(f'{c}_{l}' for c in ('ok', 'correccion') for l in IDIOMAS) + ('revisor',)

def filas_pendientes():
    """Filas de contexto (dict) por nombre inglés pendiente, y los nombres del manifiesto sin fila en la tabla."""
    m = json.load(open(os.path.join(DATA, 'estructuras.json'), encoding='utf-8'))
    tabla = json.load(open(os.path.join(DATA, 'nombres-nl-pap.json'), encoding='utf-8'))
    vistos = set(); out = []; sin_tabla = []
    for s in m['systems']:
        for e in s['structures']:
            if e['en'] in vistos: continue
            vistos.add(e['en'])
            t = tabla.get(e['en'])
            if not t: sin_tabla.append(e['en']); continue
            if all(t.get(f'{l}_fuente') == 'revisado' for l in IDIOMAS): continue
            # Pista para el revisor: el nombre generado que desplazó el título de Wikipedia (nl_ia) o el
            # título genérico de Wikipedia que se descartó por inexacto (nl_ref).
            out.append({'sistema': s['key'], 'ingles': e['en'], 'espanol': e.get('es', ''), 'latin': e.get('la', ''),
                        'neerlandes': t.get('nl', ''), 'fuente_nl': t.get('nl_fuente', ''), 'pista_nl': t.get('nl_ia') or t.get('nl_ref', ''),
                        'papiamento': t.get('pap', ''), 'fuente_pap': t.get('pap_fuente', '')})
    return out, sin_tabla

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--sistemas', nargs='*', default=[], help='claves de sistema (esqueletico, muscular, …)')
    ap.add_argument('--salida', help='CSV de salida; por defecto oleada-<sistemas>.csv, que .gitignore excluye')
    ap.add_argument('--listar', action='store_true', help='solo contar lo pendiente por sistema')
    a = ap.parse_args()
    filas, sin_tabla = filas_pendientes()
    if a.listar:
        c = Counter(f['sistema'] for f in filas)
        for s, n in sorted(c.items()): print(f'{s:16} {n} nombres por revisar')
        print(f'{"total":16} {sum(c.values())}' + (f' · {len(sin_tabla)} nombres sin fila en la tabla (caen al inglés)' if sin_tabla else ''))
        return 0
    if not a.sistemas: ap.error('indica --sistemas o --listar')
    sel = [f for f in filas if f['sistema'] in set(a.sistemas)]
    if not sel: print('ninguna fila para esos sistemas', file=sys.stderr); return 1
    salida = a.salida or f"oleada-{'-'.join(a.sistemas)}.csv"
    # utf-8-sig: Excel abre los acentos bien al hacer doble clic.
    with open(salida, 'w', encoding='utf-8-sig', newline='') as out:
        w = csv.DictWriter(out, fieldnames=list(sel[0]) + list(TRABAJO), delimiter=';'); w.writeheader()
        for f in sel: w.writerow({**f, **{k: '' for k in TRABAJO}})
    print(f'{len(sel)} nombres de {", ".join(a.sistemas)} en {salida}')
    return 0

if __name__ == '__main__':
    sys.exit(main())
