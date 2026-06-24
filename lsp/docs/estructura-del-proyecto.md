# Estructura del proyecto

Este documento propone una organización básica para el Banco Digital del Sistema Braille.

La estructura del repositorio busca separar los archivos principales, los datos y los documentos de respaldo, de manera que el proyecto pueda mantenerse ordenado, revisarse con facilidad y ampliarse progresivamente.

Estructura sugerida:

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
    ├── respaldo-institucional.md
    ├── estructura-del-proyecto.md
    └── bitacora-de-cambios.md
```

Descripción de archivos y carpetas:

`index.html` contiene la estructura principal de la aplicación web.

`estilos.css` define la apariencia visual, el diseño responsivo, la organización de tarjetas, el contraste, los espaciados y la presentación general del banco digital.

`app.js` contiene la lógica de carga de datos, búsqueda, filtros por categoría, visualización de tarjetas y funcionamiento interactivo.

`braille.json` contiene el banco inicial de contenidos del sistema Braille, incluyendo letras, números, signos, categorías, descripciones y palabras básicas.

`README.md` presenta la descripción general del proyecto, su finalidad, características, alcance pedagógico, autoría, licencia y estado de avance.

`LICENSE` establece las condiciones de uso del código del repositorio y aclara que los materiales externos o institucionales mantienen sus propias condiciones de uso.

`docs/` reúne documentos de respaldo pedagógico, autoral, institucional y organizativo.

Para mantener el repositorio ordenado, se recomienda usar nombres de archivo en minúsculas, sin tildes, sin espacios y con guiones medios. Por ejemplo: `generador-braille.js`, `palabras-basicas.json`, `ficha-alfabeto-braille.pdf`.

Cada nuevo recurso, actividad o material complementario debe registrar su fuente, fecha de incorporación y revisión pedagógica cuando corresponda.

Si el proyecto incorpora imágenes, fichas descargables, audios o materiales externos, estos deben organizarse en carpetas específicas y acompañarse de su respectiva referencia en `docs/fuentes-y-creditos.md`.