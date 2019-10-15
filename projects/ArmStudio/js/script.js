$(function () {
    alert(`A little demonstration of Scss code and a little bit jquery`);

    let barIcon = $(".fa-bars");
    let header = $("header");
    let LogInn = $(".LogIn");
    let SignUp = $(".SignUp");
    let logContainer = $(".LogIn-container");
    let SignUpContainer = $(".SignUp-container");
    let spanToggle = $(".special-span");
    let spanToggle1 = $(".special-span1");
    let contactList = $(".contact-list");
    let ulList = $(".job-a");


    barIcon.eq(0).click(function () {
        header.toggleClass("heightToggle");
    });

    LogInn.click(function () {
        logContainer.addClass("visibillityToggle");
        logContainer.removeClass("transform");

    });

    spanToggle.click(function () {
        logContainer.addClass("transform");
        logContainer.removeClass("visibillityToggle");
    })

    SignUp.click(function () {
        SignUpContainer.addClass("visibillityToggle");
        SignUpContainer.removeClass("transform");

    });

    spanToggle1.click(function () {
        SignUpContainer.addClass("transform");
        SignUpContainer.removeClass("visibillityToggle");
    });

    contactList.mouseover(function () {
        if (window.innerWidth > 992) {
            contactList.html(`091260693`);
        }
    });

    contactList.mouseout(function () {
        if (window.innerWidth > 993) {
            contactList.html(`Contact`);
        }
    });
    

    $(window).on("load", function () {
        if (window.innerWidth < 993) {
            contactList.html(`091260693`);
            ulList.html(`No jobs available right now`);
        }
    });




});