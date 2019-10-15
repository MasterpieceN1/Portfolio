let ulSlider = document.getElementById("carouselUl");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let nextBtn = function(){
	ulSlider.style.left =(parseInt(ulSlider.style.left)- 800) + "px";
	ulSlider.style.transition = "left 0.5s";
	let setN = setTimeout(
		function(){
			let firstElement = ulSlider.removeChild(ulSlider.firstElementChild);
			ulSlider.appendChild(firstElement);
			ulSlider.style.transition = "";
			ulSlider.style.left = 0;
		},500
	)
}

let prevBtn = function(){
	let lastElement = ulSlider.removeChild(ulSlider.lastElementChild);
	ulSlider.style.left ='-800px';
	ulSlider.style.transition = "";
	ulSlider.insertBefore(lastElement,ulSlider.firstElementChild);
	let setP = setTimeout(
		function(){
			ulSlider.style.transition = "left 0.5s";
			ulSlider.style.left = (parseInt(ulSlider.style.left)+ 800) + "px";
		}, 0
	)
	
}
let autoImgChange = function(){
		let next = document.querySelector(".next");
		let prev = document.querySelector(".prev");
		setInt = setInterval(nextBtn,7000);
		next.onclick = function(){
			clearInterval(setInt);
			setInt = setInterval(nextBtn,7000);
		}
		prev.onclick = function(){
			clearInterval(setInt);
			setInt = setInterval(prevBtn,7000);
		}
	} 

next.addEventListener("click",nextBtn,false);
prev.addEventListener("click",prevBtn,false);

autoImgChange();


		

$(function(){
	let ulSlider = document.getElementById("carouselUl");
	$('.BarIcon').click(function(){
		$('.FlexibleNav').toggleClass('positionLeftToggle');
		$('.blackDiv').toggleClass('bhlujljhk');
	});

	$('.blackDiv').click(function(){
		$('.FlexibleNav').removeClass('positionLeftToggle');
		$('.blackDiv').removeClass('bhlujljhk');
	});
	
	$(window).on('load', function () {
		setTimeout(topHeight,100);
		function topHeight(){
			 $('.blackDiv1').addClass('bhlujljhk');
      		$('.demonstration-div').addClass('positionheight');
      		$("body").addClass("oveFlow");
		}
     
 	});

 	$('.toggleBTN').click(function(){
			$('.demonstration-div').removeClass('positionheight');
			$('.blackDiv1').removeClass('bhlujljhk');
			$("body").removeClass("oveFlow");
 	});
});

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}
		
