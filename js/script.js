let backGroundfour = document.querySelector(".bg-4");
var countDownDate = new Date("Jan 7, 2020 15:37:25").getTime();
let intViewportHeight = window.innerHeight;
let navbarLinks = document.querySelectorAll(".nav-item a");
let divLoader = document.querySelector(".preloader-1");
let scrollBottom = document.querySelector(".scrolldown");
let scrollBottom1 = document.querySelector(".scrolldown1");
let specialDiv = document.querySelector(".icon-container");
let scrollToTop = document.querySelector(".scrlUp");
let somethingElse = ["about", "portfolio"];
let homeHeight = $("#home").position().top;
let menuBar = $('#menu').position().top;
let aboutSectionHeight = $('#about').position().top;
let page_Info = $(".Page-Info");
let portfolio = $("#portfolio").position().top;
let parBridge = $(".bridge");
let parText = $(".text");

var starter = function() {
    var boddy = document.querySelector("body");
    divLoader.style.left = "-100%";
    boddy.classList.remove("oveFlow");
}

setTimeout(starter, 2000);

//--------------------------------------------------Timer-------------------------------------------------------------
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = `Under maintance will be available at ${days} days ${hours} hour
  	${minutes} minutes ${seconds} seconds `;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }

}, 1000);

//Scroll-functions---------------------------------------------------------------

let toTop = function() {
    let setscrlInt = setInterval(
        function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, -10);
            } else {
                clearInterval(setscrlInt);
            }
        }
    )
}

let tobottom = function(elementId) {
    return () => {
        var offset = $(`#${elementId}`).offset();
        $('html, body').animate({
            scrollTop: offset.top,
        });
    };
};

let tobottom1 = function() {
    let setscrlInt3 = setInterval(
        function() {
            window.scrollBy(0, 10);
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                clearInterval(setscrlInt3);
            }

        }
    )
}



let scrollUp = function() {
    if (window.scrollY > aboutSectionHeight) {
        specialDiv.style.right = "20px";
    } else {
        specialDiv.style.right = "-85px";
    }
}

let linksBorders = function() {
    if (window.scrollY < 799) {
        navbarLinks[0].classList.add("border-bottomm");
    } else {
        navbarLinks[0].classList.remove("border-bottomm");
    }

    if (window.scrollY == 0) {
        navbarLinks[0].classList.add("activateBounce");
    } else {
        navbarLinks[0].classList.remove("activateBounce");
    }

    if (window.scrollY >= 800 && window.scrollY < 1387) {
        navbarLinks[1].classList.add("border-bottomm");
    } else {
        navbarLinks[1].classList.remove("border-bottomm");
    }

    if (window.scrollY >= 800 && window.scrollY <= 1386) {
        navbarLinks[1].classList.add("activateBounce");
    } else {
        navbarLinks[1].classList.remove("activateBounce");
    }

    if (window.scrollY >= 1387) {
        navbarLinks[2].classList.add("border-bottomm");
    } else {
        navbarLinks[2].classList.remove("border-bottomm");
    }

    if (window.scrollY >= 1387) {
        navbarLinks[2].classList.add("activateBounce");
    } else {
        navbarLinks[2].classList.remove("activateBounce");
    }
}

//--------------------------------------------------------------

//Jqueryscroll-------------------------------------------------- 

$(".scrolldown").click(function() {
    var offset = $(`#${somethingElse[0]}`).offset();
    $('html, body').animate({
        scrollTop: offset.top,
    });
});

$(".scrolldown1").click(function() {
    var offset = $(`#${somethingElse[1]}`).offset();
    $('html, body').animate({
        scrollTop: offset.top,
    });
});

$(window).scroll(function() {
    if (window.scrollY >= aboutSectionHeight) {
        page_Info.eq(0).css({ "height": "73px" });
    } else {
        page_Info.eq(0).css({ "height": "24px" });
    }

    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        page_Info.eq(0).css({ "height": "155px" });
    }




});

//-----------------------------------------------------------------

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}



//-----------------------------------------------------------------

//bootstrap carousel settings--------------------------------------



//-----------------------------------------------------------------

//eventlistener----------------------------------------------------

window.addEventListener("scroll", linksBorders, false);
window.addEventListener("scroll", scrollUp, false);
scrollBottom.addEventListener("click", tobottom('about'), false);
scrollBottom1.addEventListener("click", tobottom1, false);
scrollToTop.addEventListener("click", toTop, false);