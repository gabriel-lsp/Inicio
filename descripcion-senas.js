"use strict";

const mapaDescripcionesLSP = new Map();

function claveDescripcionLSP(valor) {
  return String(valor || "")
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function registrarDescripcionLSP(item) {
  const descripcion = String(item.descripcion || "").trim();

  if (!descripcion) {
    return;
  }

  const claves = [
    item.palabra,
    item.archivo_imagen
  ];

  claves.forEach((clave) => {
    const claveNormalizada = claveDescripcionLSP(clave);

    if (claveNormalizada) {
      mapaDescripcionesLSP.set(claveNormalizada, descripcion);
    }
  });
}

function obtenerDescripcionLSP(tarjeta) {
  const palabra = tarjeta.querySelector(".palabra-tarjeta")?.textContent;
  const imagen = tarjeta.querySelector(".imagen-sena")?.getAttribute("src");

  return (
    mapaDescripcionesLSP.get(claveDescripcionLSP(palabra)) ||
    mapaDescripcionesLSP.get(claveDescripcionLSP(imagen)) ||
    ""
  );
}

function completarDescripcionLSP(tarjeta) {
  const contenedor = tarjeta.querySelector(".tarjeta-contenido");
  const titulo = tarjeta.querySelector(".palabra-tarjeta");

  if (!contenedor || !titulo) {
    return;
  }

  let descripcion = tarjeta.querySelector(".descripcion-tarjeta");

  if (!descripcion) {
    descripcion = document.createElement("p");
    descripcion.className = "descripcion-tarjeta";
    titulo.insertAdjacentElement("afterend", descripcion);
  }

  const textoDescripcion = obtenerDescripcionLSP(tarjeta);

  if (textoDescripcion) {
    descripcion.textContent = textoDescripcion;
    descripcion.hidden = false;
  } else {
    descripcion.textContent = "";
    descripcion.hidden = true;
  }
}

function completarGaleriaLSP() {
  document.querySelectorAll(".tarjeta").forEach(completarDescripcionLSP);
}

async function iniciarDescripcionesLSP() {
  try {
    const respuesta = await fetch("datos/diccionario_lsp.json");

    if (!respuesta.ok) {
      return;
    }

    const datos = await respuesta.json();

    if (!Array.isArray(datos)) {
      return;
    }

    datos.forEach(registrarDescripcionLSP);
    completarGaleriaLSP();

    const galeria = document.querySelector("#galeria");

    if (!galeria) {
      return;
    }

    const observador = new MutationObserver(completarGaleriaLSP);
    observador.observe(galeria, { childList: true });
  } catch (error) {
    console.warn("No fue posible completar las descripciones LSP.", error);
  }
}

iniciarDescripcionesLSP();