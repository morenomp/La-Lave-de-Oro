
//      🔴 ABIERTO & CERRADO 🔴 

const iconSearch = document.getElementById('search_button');

iconSearch.addEventListener('click', () =>{

	console.log(':D search')

	const contsSarch = document.getElementById('ContSearchTodo');
	contsSarch.classList.toggle('activeSearch');

	const scroll = document.getElementById('column_pc');
	scroll.classList.toggle('desactiveScroll');

	const header = document.getElementById('ContTodoHeader');
	header.classList.toggle('activeColor');
	header.classList.toggle('activeColorTwo');

	// const lineHeader = document.getElementById('row_top');
	// lineHeader.classList.toggle('activeColor');

	const logoFilter = document.getElementById('logo_header_two');
	logoFilter.classList.toggle('activeFilter');
});

//      🔴 ABIERTO & CERRADO EFECTO 🔴 

const iconSearchX = document.getElementById('line_x_search_id');

iconSearchX.addEventListener('click', () =>{

	console.log('x search')

	const contsSarch = document.getElementById('ContSearchTodo');
	contsSarch.classList.toggle('activeSearch');

	const scroll = document.getElementById('column_pc');
	scroll.classList.toggle('desactiveScroll');

	const header = document.getElementById('ContTodoHeader');
	header.classList.toggle('activeColor');
	header.classList.toggle('activeColorTwo');

	// const lineHeader = document.getElementById('row_top');
	// lineHeader.classList.toggle('activeColor');

	const logoFilter = document.getElementById('logo_header_two');
	logoFilter.classList.toggle('activeFilter');
});

function abrirSearch() {

// al hacer click el contenedor line_x_search_id baja

	document.getElementById("line_x_search_id").style.top = "32px";
	document.getElementById("line_x_search_id").style.right = "125px";
// 
	document.getElementById("line_one_search").style.left = "-50px";
	document.getElementById("line_two_search").style.left = "50px";
//
	document.getElementById("line_one_search").style.opacity = "0";
	document.getElementById("line_two_search").style.opacity = "0";
//
	document.getElementById("line_x_two_search").style.left = "26px";
	document.getElementById("line_x_two_search").style.top = "37px";
	document.getElementById("line_x_two_search").style.opacity = "1";
//
	document.getElementById("line_x_one_search").style.left = "26px";
	document.getElementById("line_x_one_search").style.top = "37px";
	document.getElementById("line_x_one_search").style.opacity = "1";
//
	document.getElementById("search_img").style.opacity = "0";
	document.getElementById("burguer_button").style.opacity = "0.45";
	document.getElementById("burguer_button").style.border  = "1px solid #7a7a7a";
	document.getElementById("burguer_button").style.filter = "invert(1)";
	document.getElementById("burguer_button").style.background = "#141413";
	document.getElementById("burguer_button").style.transition = "0.8s";
//
	document.getElementById("opacBurguer").style.top = "32px";
	document.getElementById("opacBurguer").style.right = "21px";

}

function cerrarSearch() {

// al hacer click el contenedor line_x_search_id sube

	document.getElementById("line_x_search_id").style.top = "-80px";
	document.getElementById("line_x_search_id").style.right = "125px";
//
	document.getElementById("line_one_search").style.left = "0px";
	document.getElementById("line_two_search").style.left = "0px";
//
	document.getElementById("line_one_search").style.opacity = "1";
	document.getElementById("line_two_search").style.opacity = "1";
//
	document.getElementById("line_x_one_search").style.left = "-17px";
	document.getElementById("line_x_one_search").style.top = "8px";
	document.getElementById("line_x_one_search").style.opacity = "0";
//
	document.getElementById("line_x_two_search").style.left = "-54px";
	document.getElementById("line_x_two_search").style.top = "65px";
	document.getElementById("line_x_two_search").style.opacity = "0";
//
	document.getElementById("search_img").style.opacity = "1";
	document.getElementById("burguer_button").style.opacity = "1";
	document.getElementById("burguer_button").style.border  = "0px solid #7a7a7a";
	document.getElementById("burguer_button").style.filter = "invert(0)";
	document.getElementById("burguer_button").style.background = "#000";
	document.getElementById("burguer_button").style.transition = "0.8s";
//
	document.getElementById("opacBurguer").style.top = "-100px";
	document.getElementById("opacBurguer").style.right = "21px";
	
}


//           🔴 B U S C A D O R 🔴 


// Obtener el input de búsqueda

const inputBusqueda = document.getElementById('inputBusqueda');

// Agregar un event listener para el evento 'input'

inputBusqueda.addEventListener('input', function(event) {

// Obtener el valor actual del input

    const contenido = event.target.value;

//primero se esconden todas las imágenes
//mediante array

let listaTodasImg = document.getElementsByClassName("imgFromSearch");



for (var i = 0; i < listaTodasImg.length; i++) {
	listaTodasImg[i].style.display= "none";
}

for (var i = 0; i < listaTodasImg.length; i++) {

	let listaClass = listaTodasImg[i].classList;

	let contenidoComprobar = contenido.toLowerCase();


/* al poner 1, 2, 3 y 4, le decimos que lo filtre por cuatro 
clases diferentes*/


	if(listaClass[1].startsWith(contenidoComprobar)){

	listaTodasImg[i].style.display= "flex";

	// const notFound = document.getElementById('notFound');
	// notFound.classList.toggle('activeNotFound');

	}
	if(listaClass[2].startsWith(contenidoComprobar)){

	listaTodasImg[i].style.display= "flex";

	}
	if(listaClass[3].startsWith(contenidoComprobar)){

	listaTodasImg[i].style.display= "flex";

	}
	if(listaClass[4].startsWith(contenidoComprobar)){

	listaTodasImg[i].style.display= "flex";

	}
}

// cuando el valor del buscador sea 0
// forzar a Not Found a no aparecer

if(contenido.length === 0){
	console.log("empty");
	document.getElementById("notFound").style.display="none";
}
if(contenido.length === 0){
	console.log("empty1");
	document.getElementById("notFound_1").style.display="none";
}
if(contenido.length === 0){
	console.log("empty2");
	document.getElementById("notFound_2").style.display="none";
}
if(contenido.length === 0){
	console.log("empty3");
	document.getElementById("notFound_3").style.display="none";
}
if(contenido.length === 0){
	console.log("empty4");
	document.getElementById("notFound_4").style.display="none";
}
if(contenido.length === 0){
	console.log("empty5");
	document.getElementById("notFound_5").style.display="none";
}
if(contenido.length === 0){
	console.log("empty6");
	document.getElementById("notFound_6").style.display="none";
}

// Mostrar el contenido en la consola (puedes hacer cualquier 
// otra cosa con él)
    console.log("Contenido de búsqueda: ", contenido);
});