
//  🔴 barra de progreso 🔴 

function UpdateScrollProgress () {
    var toppos = document.documentElement.scrollTop;
    var remaining = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var percentage = (toppos / remaining) * 100;

    document.getElementsByClassName ('progress-bar')[0].style.width = percentage + "%";
};

	document.addEventListener ("scroll", () => {
    UpdateScrollProgress ();
});

//  🔴 animaciones de entrada en escena (sobre nosotros) 🔴 

function hideShowOnScroll(){

	console.log(document.documentElement.scrollTop);
	// para calcular los pixeles que scrolleas

	if (document.documentElement.scrollTop>100) {

		console.log("sí");
		document.getElementById("marca").style.opacity = "0";
		document.getElementById("navMedidas").style.height = "80px";
	}

	else{
		console.log("no")
		document.getElementById("marca").style.opacity = "1";
		document.getElementById("navMedidas").style.height = "110px";
	}
};