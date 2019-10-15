var barIcon = document.querySelector("i");
var sd = document.querySelector(".menu");
var btnUP = document.querySelector(".btn-up");

var drad= function(){
	sd.classList.toggle("variant");
}

var heightW = function(){
	var figureSlider = document.querySelector(".carousel-container");
	figureSlider.classList.toggle("vr");
	btnUP.classList.toggle("rotate");
}

barIcon.addEventListener("click",drad,false);
btnUP.addEventListener("click",heightW,false);
