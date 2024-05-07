//  🔴 animación scroll inicio 🔴 

window.onscroll = function(){
	hideShowOnScroll()
};

function hideShowOnScroll(){

	console.log(document.documentElement.scrollTop);
	// para calcular los pixeles que scrolleas

	if (document.documentElement.scrollTop < 120) {

		document.getElementById("cortePath").style.clipPath = "polygon(0 100%, 100% 0%, 100% 100%, 0 100%)";
		// document.getElementById("cortePathPromo").style.clipPath = "polygon(0 100%, 100% 0%, 100% 100%, 0 100%)";
	}
	if (document.documentElement.scrollTop < 20) {

		document.getElementById("ContScrollAnimation").style.top = "80%";
		document.getElementById("ContScrollAnimation").style.opacity = "1";
	}

	if (document.documentElement.scrollTop < 270) {

		document.getElementById("ContMapa").style.opacity = "0";
		document.getElementById("ContMapa").style.height = "75vh";
	}

	else{

		document.getElementById("ContScrollAnimation").style.top = "78%";
		document.getElementById("ContScrollAnimation").style.opacity = "0";
		document.getElementById("ContMapa").style.opacity = "1";
		document.getElementById("ContMapa").style.height = "80vh";
		document.getElementById("cortePath").style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
		// document.getElementById("cortePathPromo").style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
	}

};