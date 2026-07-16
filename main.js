(() => {
  "use strict";

  const USUARIO_ANTERIOR = "crebe-ucayali";
  const USUARIO_ACTUAL = "crebe-ucayali";
  const ATRIBUTOS_URL = [
    "href",
    "src",
    "srcset",
    "action",
    "poster",
    "content",
    "data-news-source",
    "data-fallback-source",
    "style"
  ];

  const corregirValor = (valor) => {
    if (typeof valor !== "string" || !valor.includes(USUARIO_ANTERIOR)) return valor;
    return valor.split(USUARIO_ANTERIOR).join(USUARIO_ACTUAL);
  };

  const corregirElemento = (elemento) => {
    if (!(elemento instanceof Element)) return;

    ATRIBUTOS_URL.forEach((atributo) => {
      if (!elemento.hasAttribute(atributo)) return;
      const actual = elemento.getAttribute(atributo);
      const corregido = corregirValor(actual);
      if (corregido !== actual) elemento.setAttribute(atributo, corregido);
    });
  };

  const corregirArbol = (raiz = document) => {
    if (raiz instanceof Element) corregirElemento(raiz);
    raiz.querySelectorAll?.("*").forEach(corregirElemento);
  };

  const corregirReglas = (reglas) => {
    if (!reglas) return;

    Array.from(reglas).forEach((regla) => {
      try {
        if (regla.style) {
          Array.from(regla.style).forEach((propiedad) => {
            const actual = regla.style.getPropertyValue(propiedad);
            const corregido = corregirValor(actual);
            if (corregido !== actual) {
              regla.style.setProperty(
                propiedad,
                corregido,
                regla.style.getPropertyPriority(propiedad)
              );
            }
          });
        }

        if (regla.cssRules) corregirReglas(regla.cssRules);
        if (regla.styleSheet?.cssRules) corregirReglas(regla.styleSheet.cssRules);
      } catch (error) {
        // Algunas hojas externas no permiten lectura mediante CSSOM.
      }
    });
  };

  const corregirHojasDeEstilo = () => {
    Array.from(document.styleSheets).forEach((hoja) => {
      try {
        corregirReglas(hoja.cssRules);
      } catch (error) {
        // Se conserva la hoja cuando el navegador limita su lectura.
      }
    });
  };

  const aplicarCorreccion = () => {
    corregirArbol(document);
    corregirHojasDeEstilo();
  };

  aplicarCorreccion();

  const observador = new MutationObserver((cambios) => {
    cambios.forEach((cambio) => {
      if (cambio.type === "attributes") {
        corregirElemento(cambio.target);
        return;
      }

      cambio.addedNodes.forEach((nodo) => {
        if (nodo instanceof Element) corregirArbol(nodo);
      });
    });
  });

  observador.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ATRIBUTOS_URL
  });

  document.addEventListener("DOMContentLoaded", aplicarCorreccion);
  window.addEventListener("load", aplicarCorreccion);

  try {
    const solicitud = new XMLHttpRequest();
    solicitud.open("GET", "main-original.js?v=20260716-01", false);
    solicitud.send(null);

    if ((solicitud.status >= 200 && solicitud.status < 300) || solicitud.status === 0) {
      const codigoCorregido = corregirValor(solicitud.responseText);
      (0, eval)(codigoCorregido);
    } else {
      throw new Error(`No se pudo cargar main-original.js: ${solicitud.status}`);
    }
  } catch (error) {
    console.error("No se pudo inicializar el archivo JavaScript original.", error);
    document.write('<script src="main-original.js?v=20260716-01"><\/script>');
  }
})();
