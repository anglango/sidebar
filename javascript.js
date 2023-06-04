//para el side bar
const btntoggle = document.querySelector('.toggle-btn');

btntoggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
})
// inicio....................

document.addEventListener("DOMContentLoaded", function() {
  const inicioElement = document.getElementById("inicio");
  const mensajeBienvenidaElement = document.getElementById("mensaje-bienvenida");

  inicioElement.addEventListener("click", function() {
    mensajeBienvenidaElement.style.display = "block";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const inicioElement = document.getElementById("inicio");
  const mensajeBienvenidaElement = document.getElementById("mensaje-bienvenida");
  const cerrarBtnElement = document.querySelector(".cerrar-btn");

  inicioElement.addEventListener("click", function() {
    mensajeBienvenidaElement.style.display = "block";
  });

  cerrarBtnElement.addEventListener("click", function() {
    mensajeBienvenidaElement.style.display = "none";
  });
});

//para el formularioa..................................

document.addEventListener("DOMContentLoaded", function() {
  const formubar = document.getElementById("formulario");
  const form = document.getElementById("formulario1");

  formubar.addEventListener("click", function() {form.style.display = "block";
  });
});
// Para el boton cerrar
document.addEventListener("DOMContentLoaded", function() {
  const cerrarFormulario1Button = document.querySelector(".cerrar-formulario1");
  const formulario1Element = document.getElementById("formulario1");

  cerrarFormulario1Button.addEventListener("click", function() {
    formulario1Element.style.display = "none";
  });
});

///////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  const inicioElement = document.getElementById("inicio");
  const formularioElement = document.getElementById("formulario");
  const mensajeBienvenidaElement = document.getElementById("mensaje-bienvenida");
  const formularioContainerElement = document.getElementById("formulario1");

  inicioElement.addEventListener("click", function() {
    mensajeBienvenidaElement.style.display = "block";
    formularioContainerElement.style.display = "none";
  });

  formularioElement.addEventListener("click", function() {
    mensajeBienvenidaElement.style.display = "none";
    formularioContainerElement.style.display = "block";
  });

  const cerrarBtnElements = document.querySelectorAll(".cerrar-btn");
  cerrarBtnElements.forEach(function(btn) {
    btn.addEventListener("click", function() {
      mensajeBienvenidaElement.style.display = "none";
      formularioContainerElement.style.display = "none";
    });
  });
});


inicioElement.addEventListener("click", function() {
  mensajeBienvenidaElement.style.display = "block";
  formularioContainerElement.style.display = "none";
});

formularioElement.addEventListener("click", function() {
  mensajeBienvenidaElement.style.display = "none";
  formularioContainerElement.style.display = "block";
});
