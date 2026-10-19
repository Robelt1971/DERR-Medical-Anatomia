// Textos de la interfaz. Los nombres anatómicos vienen de los datos (Z-Anatomy), no de aquí.
export const TEXTOS = {
  es: {
    titulo: 'Estudio de anatomía 3D',
    modo_explorar: 'Explorar', modo_identificar: 'Identificar', modo_localizar: 'Localizar',
    idioma_ui: 'Interfaz', idioma_nombres: 'Nombres',
    capas: 'Sistemas', mostrar_todo: 'Mostrar todo', reset_vista: 'Centrar vista', solo: 'solo',
    buscar: 'Buscar estructura', buscar_ph: 'Ej. húmero, nervio ciático…', sin_resultados: 'Sin resultados',
    ayuda: 'Arrastra para girar · rueda para acercar · clic para seleccionar · doble clic para enfocar',
    ficha_vacia: 'Selecciona una estructura en el modelo o búscala por nombre.',
    cargando: 'Cargando', lado_l: 'izquierdo', lado_r: 'derecho', opcional: 'variante',
    sistema: 'Sistema', latin: 'Latín (TA)', ingles: 'Inglés', frances: 'Francés', portugues: 'Portugués', espanol: 'Español', neerlandes: 'Neerlandés', papiamento: 'Papiamento',
    nombre_pendiente: 'nombre en {idioma} pendiente de revisión clínica; se muestra el latín', fuente_wiki_nl: 'Wikipedia (nl), pendiente de revisión clínica', fuente_revisado: 'revisado clínicamente',
    definicion: 'Definición', fuente_wiki: 'Fuente: Wikipedia (en), CC BY-SA', fuente_otra: 'Fuente: {host}', sin_definicion: 'Sin definición disponible en los datos de origen.',
    ocultar: 'Ocultar', aislar: 'Aislar', enfocar: 'Enfocar',
    progreso: 'Progreso', borrar_progreso: 'Borrar progreso local', progreso_resumen: '{n} estructuras practicadas · {ok} aciertos · {mal} fallos',
    progreso_vacio: 'Aún no has practicado. Usa los modos Identificar o Localizar.',
    alcance: 'Alcance:', alcance_visibles: 'sistemas visibles', repasar_debiles: 'Priorizar las que fallo',
    marcador: 'Sesión: {ok}/{n} aciertos · racha {racha}',
    pregunta_identificar: '¿Qué estructura está resaltada?',
    pregunta_localizar: 'Haz clic en el modelo sobre: {nombre}',
    correcto: 'Correcto.', incorrecto: 'Incorrecto. Era: {nombre}', casi: 'Esa es {nombre}. Inténtalo de nuevo ({n} intentos restantes).',
    siguiente: 'Siguiente', mostrar_respuesta: 'Mostrar respuesta', saltar: 'Saltar',
    sin_estructuras: 'No hay estructuras visibles para practicar. Activa algún sistema.',
    borrar_confirmar: '¿Borrar el progreso guardado en este navegador?',
    cargando_sistema: 'Cargando {nombre}…',
    error_iniciar: 'Error al iniciar: {msg}',
    creditos: 'Modelos y nombres derivados de Z-Anatomy (CC BY-SA 4.0), a su vez derivado de BodyParts3D (DBCLS, CC BY-SA 2.1 JP). Modificados por DERR: reexportación a GLB, compresión meshopt y recoloreado en el visor. Definiciones de Wikipedia (CC BY-SA); la fuente de cada una se indica en su ficha. Oído interno y riñón (material no comercial) y corteza parcelada, sustancia blanca y tractos (licencia no declarada) excluidos. Autores, cambios y detalle por archivo en LICENSES.md.',
  },
  en: {
    titulo: '3D anatomy study',
    modo_explorar: 'Explore', modo_identificar: 'Identify', modo_localizar: 'Locate',
    idioma_ui: 'Interface', idioma_nombres: 'Names',
    capas: 'Systems', mostrar_todo: 'Show all', reset_vista: 'Reset view', solo: 'only',
    buscar: 'Find a structure', buscar_ph: 'e.g. humerus, sciatic nerve…', sin_resultados: 'No results',
    ayuda: 'Drag to rotate · wheel to zoom · click to select · double-click to focus',
    ficha_vacia: 'Select a structure in the model or search it by name.',
    cargando: 'Loading', lado_l: 'left', lado_r: 'right', opcional: 'variant',
    sistema: 'System', latin: 'Latin (TA)', ingles: 'English', frances: 'French', portugues: 'Portuguese', espanol: 'Spanish', neerlandes: 'Dutch', papiamento: 'Papiamento',
    nombre_pendiente: '{idioma} name pending clinical review; Latin shown instead', fuente_wiki_nl: 'Wikipedia (nl), pending clinical review', fuente_revisado: 'clinically reviewed',
    definicion: 'Definition', fuente_wiki: 'Source: Wikipedia (en), CC BY-SA', fuente_otra: 'Source: {host}', sin_definicion: 'No definition available in the source data.',
    ocultar: 'Hide', aislar: 'Isolate', enfocar: 'Focus',
    progreso: 'Progress', borrar_progreso: 'Clear local progress', progreso_resumen: '{n} structures practised · {ok} correct · {mal} wrong',
    progreso_vacio: 'Nothing practised yet. Use the Identify or Locate modes.',
    alcance: 'Scope:', alcance_visibles: 'visible systems', repasar_debiles: 'Prioritise the ones I miss',
    marcador: 'Session: {ok}/{n} correct · streak {racha}',
    pregunta_identificar: 'Which structure is highlighted?',
    pregunta_localizar: 'Click on the model on: {nombre}',
    correcto: 'Correct.', incorrecto: 'Incorrect. It was: {nombre}', casi: 'That is {nombre}. Try again ({n} attempts left).',
    siguiente: 'Next', mostrar_respuesta: 'Show answer', saltar: 'Skip',
    sin_estructuras: 'No visible structures to practise. Enable a system.',
    borrar_confirmar: 'Clear the progress saved in this browser?',
    cargando_sistema: 'Loading {nombre}…',
    error_iniciar: 'Startup error: {msg}',
    creditos: 'Models and names derived from Z-Anatomy (CC BY-SA 4.0), itself derived from BodyParts3D (DBCLS, CC BY-SA 2.1 JP). Modified by DERR: re-export to GLB, meshopt compression and recolouring in the viewer. Definitions from Wikipedia (CC BY-SA); the source of each one is shown on its card. Inner ear and kidney (non-commercial material) and parcellated cortex, white matter and tracts (licence not declared) excluded. Authors, changes and per-file detail in LICENSES.md.',
  },
  nl: {
    titulo: '3D-anatomie studeren',
    modo_explorar: 'Verkennen', modo_identificar: 'Herkennen', modo_localizar: 'Aanwijzen',
    idioma_ui: 'Interface', idioma_nombres: 'Namen',
    capas: 'Stelsels', mostrar_todo: 'Alles tonen', reset_vista: 'Beeld centreren', solo: 'alleen',
    buscar: 'Structuur zoeken', buscar_ph: 'bv. humerus, nervus ischiadicus…', sin_resultados: 'Geen resultaten',
    ayuda: 'Slepen om te draaien · scrollen om te zoomen · klik om te selecteren · dubbelklik om te focussen',
    ficha_vacia: 'Selecteer een structuur in het model of zoek op naam.',
    cargando: 'Laden', lado_l: 'links', lado_r: 'rechts', opcional: 'variant',
    sistema: 'Stelsel', latin: 'Latijn (TA)', ingles: 'Engels', frances: 'Frans', portugues: 'Portugees', espanol: 'Spaans', neerlandes: 'Nederlands', papiamento: 'Papiaments',
    nombre_pendiente: '{idioma} naam wacht op klinische controle; Latijn wordt getoond', fuente_wiki_nl: 'Wikipedia (nl), klinische controle nog niet gedaan', fuente_revisado: 'klinisch gecontroleerd',
    definicion: 'Definitie', fuente_wiki: 'Bron: Wikipedia (en), CC BY-SA', fuente_otra: 'Bron: {host}', sin_definicion: 'Geen definitie beschikbaar in de brongegevens.',
    ocultar: 'Verbergen', aislar: 'Isoleren', enfocar: 'Focus',
    progreso: 'Voortgang', borrar_progreso: 'Lokale voortgang wissen', progreso_resumen: '{n} structuren geoefend · {ok} goed · {mal} fout',
    progreso_vacio: 'Nog niets geoefend. Gebruik Herkennen of Aanwijzen.',
    alcance: 'Bereik:', alcance_visibles: 'zichtbare stelsels', repasar_debiles: 'Voorrang aan wat ik fout doe',
    marcador: 'Sessie: {ok}/{n} goed · reeks {racha}',
    pregunta_identificar: 'Welke structuur is gemarkeerd?',
    pregunta_localizar: 'Klik in het model op: {nombre}',
    correcto: 'Goed.', incorrecto: 'Fout. Het was: {nombre}', casi: 'Dat is {nombre}. Probeer opnieuw ({n} pogingen over).',
    siguiente: 'Volgende', mostrar_respuesta: 'Antwoord tonen', saltar: 'Overslaan',
    sin_estructuras: 'Geen zichtbare structuren om te oefenen. Zet een stelsel aan.',
    borrar_confirmar: 'De in deze browser opgeslagen voortgang wissen?',
    cargando_sistema: '{nombre} laden…',
    error_iniciar: 'Fout bij het starten: {msg}',
    creditos: 'Modellen en namen afgeleid van Z-Anatomy (CC BY-SA 4.0), op zijn beurt afgeleid van BodyParts3D (DBCLS, CC BY-SA 2.1 JP). Aangepast door DERR: herexport naar GLB, meshopt-compressie en herkleuring in de viewer. Definities van Wikipedia (CC BY-SA); de bron van elke definitie staat op de kaart. Binnenoor en nier (niet-commercieel materiaal) en geparcelleerde cortex, witte stof en banen (licentie niet opgegeven) uitgesloten. Auteurs, wijzigingen en details per bestand in LICENSES.md.',
  },
  pap: {
    titulo: 'Estudio di anatomia 3D',
    modo_explorar: 'Explorá', modo_identificar: 'Identificá', modo_localizar: 'Localisá',
    idioma_ui: 'Interfaz', idioma_nombres: 'Nomber',
    capas: 'Sistemanan', mostrar_todo: 'Mustra tur', reset_vista: 'Centra vista', solo: 'so',
    buscar: 'Busca structura', buscar_ph: 'P.e. humero, nervio ciatico…', sin_resultados: 'Sin resultado',
    ayuda: 'Lastra pa drei · rol pa haci zoom · klik pa selectá · dobel klik pa enfocá',
    ficha_vacia: 'Selectá un structura den e modelo of busca e pa nomber.',
    cargando: 'Ta carga', lado_l: 'robes', lado_r: 'drechi', opcional: 'variante',
    sistema: 'Sistema', latin: 'Latin (TA)', ingles: 'Ingles', frances: 'Frances', portugues: 'Portugues', espanol: 'Spaño', neerlandes: 'Hulandes', papiamento: 'Papiamento',
    nombre_pendiente: 'nomber na {idioma} ta pendiente di revision clinico; ta mustra e latin', fuente_wiki_nl: 'Wikipedia (nl), pendiente di revision clinico', fuente_revisado: 'revisá clinicamente',
    definicion: 'Definicion', fuente_wiki: 'Fuente: Wikipedia (en), CC BY-SA', fuente_otra: 'Fuente: {host}', sin_definicion: 'No tin definicion disponibel den e datonan di origen.',
    ocultar: 'Sconde', aislar: 'Isolá', enfocar: 'Enfocá',
    progreso: 'Progreso', borrar_progreso: 'Kita progreso local', progreso_resumen: '{n} structura practicá · {ok} corecto · {mal} incorecto',
    progreso_vacio: 'Ainda bo no a practicá. Usa e modonan Identificá of Localisá.',
    alcance: 'Alcance:', alcance_visibles: 'sistemanan visibel', repasar_debiles: 'Duna prioridad na esnan cu mi ta faya',
    marcador: 'Sesion: {ok}/{n} corecto · racha {racha}',
    pregunta_identificar: 'Cua structura ta marcá?',
    pregunta_localizar: 'Klik riba e modelo riba: {nombre}',
    correcto: 'Corecto.', incorrecto: 'Incorecto. Tabata: {nombre}', casi: 'Esey ta {nombre}. Purba atrobe ({n} intento ta resta).',
    siguiente: 'Siguiente', mostrar_respuesta: 'Mustra contesta', saltar: 'Salta',
    sin_estructuras: 'No tin structura visibel pa practicá. Activá un sistema.',
    borrar_confirmar: 'Kita e progreso wardá den e navegador aki?',
    cargando_sistema: 'Ta carga {nombre}…',
    error_iniciar: 'Error ora di cuminsa: {msg}',
    creditos: 'Modelo y nomber derivá di Z-Anatomy (CC BY-SA 4.0), cu na su turno ta derivá di BodyParts3D (DBCLS, CC BY-SA 2.1 JP). Modificá pa DERR: re-exportacion na GLB, compresion meshopt y recolorá den e visor. Definicionnan di Wikipedia (CC BY-SA); e fuente di cada un ta indicá den su ficha. Oido interno y nier (material no comercial) y corteza parcelá, sustancia blanco y tracto (licencia no declará) ta excluí. Autornan, cambionan y detaye pa archivo den LICENSES.md.',
  },
};

// Nombres de los sistemas en la interfaz. Son etiquetas de interfaz, no nomenclatura anatómica:
// por eso viven aquí (en los cuatro idiomas de la interfaz) y no en el manifiesto.
const SISTEMAS = {
  es: { esqueletico: 'Sistema esquelético', articulaciones: 'Articulaciones', muscular: 'Sistema muscular', cardiovascular: 'Sistema cardiovascular', linfoide: 'Órganos linfoides', nervioso: 'Sistema nervioso y órganos de los sentidos', visceral: 'Sistemas viscerales', regiones: 'Regiones del cuerpo' },
  en: { esqueletico: 'Skeletal system', articulaciones: 'Joints', muscular: 'Muscular system', cardiovascular: 'Cardiovascular system', linfoide: 'Lymphoid organs', nervioso: 'Nervous system & sense organs', visceral: 'Visceral systems', regiones: 'Regions of the human body' },
  nl: { esqueletico: 'Skelet', articulaciones: 'Gewrichten', muscular: 'Spierstelsel', cardiovascular: 'Hart- en vaatstelsel', linfoide: 'Lymfoïde organen', nervioso: 'Zenuwstelsel en zintuigen', visceral: 'Inwendige organen', regiones: "Lichaamsregio's" },
  pap: { esqueletico: 'Sistema esqueletico', articulaciones: 'Articulacionnan', muscular: 'Sistema muscular', cardiovascular: 'Sistema cardiovascular', linfoide: 'Organonan linfoide', nervioso: 'Sistema nervioso y organonan di sentido', visceral: 'Sistemanan visceral', regiones: 'Regionnan di curpa' },
};

// Idiomas de nombres cuya tabla es propia de DERR y está pendiente de revisión clínica (ver datos.js:
// un nombre de esa tabla solo se muestra si está revisado o viene de Wikipedia; si no, sale el latín).
export const IDIOMAS_PENDIENTES = ['nl', 'pap'];
// Idiomas en que pueden mostrarse los nombres anatómicos (coincide con el selector de index.html).
export const IDIOMAS_NOMBRES = ['es', 'en', 'la', 'nl', 'pap', 'fr', 'pt'];
// Clave de texto con el nombre de cada idioma de nombres, para etiquetas y avisos.
const NOMBRE_IDIOMA = { es: 'espanol', en: 'ingles', la: 'latin', nl: 'neerlandes', pap: 'papiamento', fr: 'frances', pt: 'portugues' };
export function nombreIdioma(code) { return t(NOMBRE_IDIOMA[code] || code); }

// Idiomas elegidos (interfaz y nombres anatómicos) y su persistencia. Único dueño de este estado.
const PREF_UI = 'derr-anatomia-ui', PREF_NOMBRES = 'derr-anatomia-nombres';
function pref(clave, defecto) { try { return localStorage.getItem(clave) || defecto; } catch { return defecto; } }
function setPref(clave, v) { try { localStorage.setItem(clave, v); } catch { /* sin almacenamiento */ } }
let actual = 'es';
let nombres = 'es';
export function setIdioma(code) { actual = TEXTOS[code] ? code : 'es'; setPref(PREF_UI, actual); }
export function idioma() { return actual; }
export function setIdiomaNombres(code) { nombres = code; setPref(PREF_NOMBRES, code); }
export function idiomaNombres() { return nombres; }
// Lee las preferencias guardadas; sin ellas, la interfaz sigue al navegador y los nombres salen en español.
// Los parámetros de URL ?ui=es|en|nl|pap y ?nombres=es|en|la|nl|pap|fr|pt mandan sobre lo guardado: así una
// aplicación que incrusta el módulo (DERR Medical System) le pasa el idioma activo del usuario.
export function cargarPreferencias() {
  const nav = navigator.language || 'es';
  const defecto = nav.startsWith('en') ? 'en' : nav.startsWith('nl') ? 'nl' : nav.startsWith('pap') ? 'pap' : 'es';
  actual = TEXTOS[pref(PREF_UI, defecto)] ? pref(PREF_UI, defecto) : 'es';
  nombres = pref(PREF_NOMBRES, 'es');
  let url;
  try { url = new URLSearchParams(window.location.search); } catch { return; }
  const ui = url.get('ui');
  if (ui && TEXTOS[ui]) setIdioma(ui);
  const nm = url.get('nombres');
  if (nm && IDIOMAS_NOMBRES.includes(nm)) setIdiomaNombres(nm);
}
export function t(clave, vars = {}) {
  const s = (TEXTOS[actual] && TEXTOS[actual][clave]) ?? TEXTOS.es[clave] ?? clave;
  return s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ''));
}
export function nombreSistema(key) { return (SISTEMAS[actual] && SISTEMAS[actual][key]) || SISTEMAS.es[key] || key; }
// Aplica los textos a los elementos marcados con data-i18n / data-i18n-ph.
export function aplicar(root = document) {
  root.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  root.querySelectorAll('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  if (root === document) { document.documentElement.lang = actual; document.title = `DERR Medical · ${t('titulo')}`; }
}
