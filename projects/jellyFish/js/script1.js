var btnUP = document.querySelector(".btn-up");

var heightW = function(){
	var figureSlider = document.querySelector(".ulX");
	figureSlider.classList.toggle("vr");
	btnUP.classList.toggle("rotate");
}

btnUP.addEventListener("click",heightW,false);
