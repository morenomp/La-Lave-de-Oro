
//      🔴 ABIERTO & CERRADO 🔴 

const iconMenu = document.getElementById('burguer_button');

iconMenu.addEventListener('click', () =>{

	console.log(':D menu');

	const contsMenu = document.getElementById('ContMenuTodo');
	contsMenu.classList.toggle('activeMenu');

	const scroll = document.getElementById('column_pc');
	scroll.classList.toggle('desactiveScroll');

	const header = document.getElementById('ContTodoHeader');
	header.classList.toggle('activeColor');
	header.classList.toggle('activeColorTwo');

	// const lineHeader = document.getElementById('row_top');
	// lineHeader.classList.toggle('activeColor');

	const logoFilter = document.getElementById('logo_header_two');
	logoFilter.classList.toggle('activeFilter');

	const activeModifications = document.getElementById('search_button');
	activeModifications.classList.toggle('activeModifications');
});

//      🔴 ABIERTO & CERRADO EFECTO 🔴 

const iconMenuX = document.getElementById('line_x_id');

iconMenuX.addEventListener('click', () =>{

	console.log('x menu');

	const contsMenuX = document.getElementById('ContMenuTodo');
	contsMenuX.classList.toggle('activeMenu');

	const scrollX = document.getElementById('column_pc');
	scrollX.classList.toggle('desactiveScroll');

	const header = document.getElementById('ContTodoHeader');
	header.classList.toggle('activeColor');
	header.classList.toggle('activeColorTwo');

	// const lineHeader = document.getElementById('row_top');
	// lineHeader.classList.toggle('activeColor');

	const logoFilter = document.getElementById('logo_header_two');
	logoFilter.classList.toggle('activeFilter');

	const activeModifications = document.getElementById('search_button');
	activeModifications.classList.toggle('activeModifications');

});

function abrirBurguer() {

// al hacer click el contenedor line_x_id baja

	document.getElementById("line_x_id").style.top = "32px";
	document.getElementById("line_x_id").style.right = "21px";
// 
	document.getElementById("line_one").style.left = "-50px";
	document.getElementById("line_two").style.left = "50px";
//
	document.getElementById("line_one").style.opacity = "0";
	document.getElementById("line_two").style.opacity = "0";
//
	document.getElementById("line_x_two").style.left = "26px";
	document.getElementById("line_x_two").style.top = "37px";
	document.getElementById("line_x_two").style.opacity = "1";
//
	document.getElementById("line_x_one").style.left = "26px";
	document.getElementById("line_x_one").style.top = "37px";
	document.getElementById("line_x_one").style.opacity = "1";
//
	document.getElementById("search_button").style.opacity = "0.45";
	document.getElementById("search_button").style.border  = "1px solid #7a7a7a";
	document.getElementById("search_button").style.filter = "invert(1)";
	document.getElementById("search_button").style.background = "#141413";
	document.getElementById("search_button").style.transition = "0.8s";
//
	document.getElementById("opacSearch").style.top = "32px";
	document.getElementById("opacSearch").style.right = "125px";

}

function cerrarBurguer() {

// al hacer click el contenedor line_x_id sube

	document.getElementById("line_x_id").style.top = "-100px";
	document.getElementById("line_x_id").style.right = "21px";
//
	document.getElementById("line_one").style.left = "0px";
	document.getElementById("line_two").style.left = "0px";
//
	document.getElementById("line_one").style.opacity = "1";
	document.getElementById("line_two").style.opacity = "1";
//
	document.getElementById("line_x_one").style.left = "-17px";
	document.getElementById("line_x_one").style.top = "8px";
	document.getElementById("line_x_one").style.opacity = "0";
//
	document.getElementById("line_x_two").style.left = "-54px";
	document.getElementById("line_x_two").style.top = "65px";
	document.getElementById("line_x_two").style.opacity = "0";
//
	document.getElementById("search_button").style.opacity = "1";
	document.getElementById("search_button").style.border  = "0px solid #7a7a7a";
	document.getElementById("search_button").style.filter = "invert(0)";
	document.getElementById("search_button").style.background = "#000";
	document.getElementById("search_button").style.transition = "0.8s";
//
	document.getElementById("opacSearch").style.top = "-80px";
	document.getElementById("opacSearch").style.right = "125px";
	
}
