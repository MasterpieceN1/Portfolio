$(function() {
    let Page_Customisation = $(".Page-Customisation");
    let textColorChange = $(".text-colors");
    let headerBg = $("#menu");
    let nav_links = $("a");
    let pageTexts = $(" p");
    let headingS = $(":header")
    let inputColorChange = $(".color");
    let cMenu = $(".values");
    let add = $("#add");
    let fontSizer = $("#font-sizer");
    let settings_container = $(".settings-container");
    let settings_Icon = $(".settings-icon");

    inputColorChange.eq(0).change(function() {
        headerBg.css("background-color", $(this).val());
    });
    inputColorChange.eq(1).change(function() {
        nav_links.css({
            "color": $(this).val()
        });
    });

    inputColorChange.eq(2).change(function() {
        headingS.css({
            "color": $(this).val()
        });
    });

    inputColorChange.eq(3).change(function() {
        pageTexts.css({
            "color": $(this).val()
        });
    });

    $('#slider').on('mousemove', function(event) {
        let cMenu = $(".values");
        let val = $(this).val();
        nav_links.css({
            'font-size': val + "px"
        });
        cMenu.css({
            'left': $('#slider').position().left + 250 + "px"
        });
        cMenu.css({
            'top': $('#slider').position().top + "px"
        });
        cMenu.html(val + "px");
        cMenu.css({
            'visibility': "visible"
        });
    });

    $('#slider').mouseleave(function() {
        cMenu.css({
            'visibility': "hidden"
        });
    });

    add.click(function() {
        let val = fontSizer.val();
        if (val > 0) {
            nav_links.css({
                'font-size': val + "px"
            });
        } else {
            alert("enter number")
        }

    });

    settings_container.click(function() {
        Page_Customisation.toggleClass("leftToggle");
        settings_container.toggleClass("transformToggle");
    })

})