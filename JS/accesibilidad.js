//  🔴 accesibilidad desplegable 🔴 

const botonFixed = document.getElementById("buttonAccFixed");

const flechita = document.getElementById("flechitaId")
const backgroundFlechita = document.getElementById("buttonAccFixed")
const botonAcc = document.getElementById("button_2");
const botonAcc2 = document.getElementById("button_3");

console.log(botonFixed);
botonFixed.addEventListener("click", () => {
	flechita.classList.toggle("rotate")
	backgroundFlechita.classList.toggle("rotate")
	botonAcc.classList.toggle("desplegar")
	botonAcc2.classList.toggle("desplegar")
});