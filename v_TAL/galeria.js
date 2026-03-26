// FILTRO
function filtrar(tipo) {
  let imagenes = document.querySelectorAll(".grid img");

  imagenes.forEach(img => {
    if (tipo === "todas") {
      img.classList.remove("oculto");
    } 
    else if (img.classList.contains(tipo)) {
      img.classList.remove("oculto");
    } 
    else {
      img.classList.add("oculto");
    }
  });
}

let imagenes = document.querySelectorAll(".grid img");

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("img-grande").src = img.src;
  });
});

// CERRAR LIGHTBOX
function cerrar() {
  document.getElementById("lightbox").style.display = "none";
}