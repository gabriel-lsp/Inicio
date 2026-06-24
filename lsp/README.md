# Banco Digital del Sistema Braille

Banco Digital del Sistema Braille es una plataforma web educativa que desarrollé como proyecto personal para apoyar la consulta visual, el reconocimiento inicial y la práctica básica del sistema Braille.

El recurso está pensado para docentes, familias, estudiantes, profesionales de apoyo y personas interesadas en acercarse al sistema Braille desde un entorno digital sencillo, accesible y funcional.

## Finalidad del proyecto

La finalidad principal es organizar contenidos básicos del sistema Braille en una plataforma de consulta clara y accesible. El recurso permite reconocer letras, vocales acentuadas, números, signos básicos y palabras de uso cotidiano mediante una presentación visual e interactiva.

Este banco digital tiene finalidad educativa, accesible y no comercial. No reemplaza el aprendizaje táctil del Braille en material impreso en relieve, ni la enseñanza especializada que pueda requerir una persona con discapacidad visual. Debe entenderse como un apoyo inicial, visual y pedagógico.

## Características

- Consulta de las letras del alfabeto español, incluida la Ñ.
- Vocales acentuadas en Braille.
- Números del 0 al 9 con prefijo numérico.
- Signos básicos de puntuación.
- Palabras básicas de uso cotidiano.
- Búsqueda por símbolo, nombre, descripción o categoría.
- Filtros por categoría.
- Diseño accesible, responsivo y sin dependencias externas.

## Estructura del repositorio

```text
banco-digital-braille/
│
├── index.html
├── estilos.css
├── app.js
├── braille.json
├── README.md
├── LICENSE
│
└── docs/
    ├── alcance-pedagogico.md
    ├── fuentes-y-creditos.md
    ├── uso-permitido.md
    ├── autoria-y-contexto.md
    ├── estructura-del-proyecto.md
    └── bitacora-de-cambios.md
```

La carpeta `docs` permite conservar información de respaldo pedagógico, autoral, técnico y organizativo del proyecto.

## Archivos principales

`index.html` contiene la estructura y el contenido principal de la plataforma.

`estilos.css` define el diseño visual, la adaptación responsiva y los estados de accesibilidad.

`app.js` contiene la carga de datos, búsqueda, filtros y renderizado de tarjetas.

`braille.json` contiene el banco inicial de contenidos en formato JSON.

## Alcance pedagógico

Este recurso facilita la consulta visual del sistema Braille. Puede apoyar procesos de sensibilización, reconocimiento inicial, práctica guiada y orientación a docentes o familias.

No reemplaza el aprendizaje táctil en material impreso en relieve, la enseñanza especializada ni la evaluación profesional de necesidades de apoyo. Su uso debe adaptarse a cada contexto educativo y a las características de los estudiantes.

## Autoría y desarrollo

Proyecto desarrollado y organizado por Gabriel Berrospi como recurso educativo digital personal orientado a la accesibilidad, la inclusión educativa y la atención a la diversidad.

Cuando el recurso sea utilizado dentro de acciones educativas del CREBE "Señor de los Milagros" - Ucayali u otra institución, dicha referencia debe entenderse como contexto de uso o coordinación, no como transferencia de autoría ni titularidad del proyecto digital.

## Uso permitido

El proyecto puede ser consultado y utilizado con fines educativos, pedagógicos, familiares y de sensibilización.

Toda reutilización debe conservar la referencia al proyecto, al autor responsable y a las fuentes o materiales externos que puedan incorporarse.

## Licencia

El código del repositorio se rige por el archivo `LICENSE`. Esta licencia no otorga automáticamente derechos sobre logos, imágenes, documentos externos o recursos elaborados por terceros.

## Ejecutar en el equipo

La página carga `braille.json` mediante `fetch`, por lo que debe abrirse desde un servidor web y no directamente con doble clic sobre `index.html`.

Con Python instalado:

```bash
python -m http.server 8000
```

Después, abre `http://localhost:8000` en el navegador.

También puede utilizarse la extensión Live Server de Visual Studio Code.

## Publicar en GitHub Pages

1. Sube todos los archivos a la rama principal del repositorio.
2. En GitHub, abre `Settings > Pages`.
3. En `Build and deployment`, selecciona `Deploy from a branch`.
4. Elige la rama principal y la carpeta raíz `/`.
5. Guarda la configuración y espera a que GitHub publique la dirección del sitio.

Antes de publicar, reemplaza los enlaces temporales por las direcciones definitivas del proyecto personal o del portal principal donde se integren los recursos.

## Estado del proyecto

Versión 1.0 funcional.

El proyecto puede seguir ampliándose con actividades interactivas, fichas descargables, juegos de reconocimiento, generador de palabras en Braille, orientaciones para docentes y materiales de apoyo familiar.

## Créditos

Banco Digital del Sistema Braille.  
Proyecto desarrollado y organizado por Gabriel Berrospi.  
Plataforma educativa personal sin fines de lucro.
