
//  🔴 acordeón 🔴  

function readyAccordeon(){

	let titols = document.getElementsByClassName("titolItemAcc");

	for (let i = 0; i < titols.length; i++) {
		titols[i].addEventListener("click", unfoldFoldAcc);
	}
}

function unfoldFoldAcc(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight1");
}

function openAcc2(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight2");
}

//  🔴 animación x 🔴  

const x_acordeon_one = document.getElementById("titolItemAcc1");
const x_acordeon_two = document.getElementById("titolItemAcc2");

const x_animate_one = document.getElementById("ContSpanLine");
const x_animate_two = document.getElementById("ContSpanLine_two");

x_acordeon_one.addEventListener("click", () => {

	x_animate_one.classList.toggle("rotate_x");

});

x_acordeon_two.addEventListener("click", () => {

	x_animate_two.classList.toggle("rotate_x_two");

});
