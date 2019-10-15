var triangle = document.querySelector(".box");
var sectionHide = document.querySelector(".company-story");

var heightZero = function(){
	sectionHide.classList.toggle("height");
}

triangle.addEventListener("click",heightZero,false);