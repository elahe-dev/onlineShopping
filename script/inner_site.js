//-----------------------------------------------//
//         SCROLL BAR
//-----------------------------------------------//
//http://nicescroll.areaaperta.com/

$(document).ready(

  function () {
      
      //$("html").niceScroll({ cursorcolor: "#000", cursoropacitymin: '1' });

      $(".product-content article").niceScroll({ cursorfixedheight: "30px" });
      $(".profile-user > article").niceScroll();
  }

);
$(function () {
    $("#accordion").accordion({
        collapsible: true
    });
});
//-----------------------------------------------//
//         SECOND SLIDER
//-----------------------------------------------//


//couter variable
var i = 0;

function slideChange() {
    var $slide = $(".slide2")[i];
    var $dot = $(".slide-select")[i];
    $(".slide2").removeClass('active');
    $($slide).toggleClass("active");
    $(".slide-select").removeClass("selected");
    $($dot).toggleClass("selected");
}

function tDown() {
    var c = i + 2;
    if (c === $(".slide2").length) {
        c = 0;
    } else if (c === $(".slide2").length + 1) {
        c = 1;
    }
    var $slide = $(".slide2")[c];
    $(".slide2").removeClass('top-slide');
    $($slide).addClass("top-slide");
    if (i === $(".slide2").length - 1) {
        i = 0;
    } else {
        i++
    }
}

function tUp() {
    var $slide = $(".slide2")[i];
    $(".slide2").removeClass('top-slide');
    $($slide).removeClass('active');
    $($slide).addClass("top-slide");
    if (i === 0) {
        i = $(".slide2").length - 1;
    } else {
        i--;
    }
}

//toggleDown click command
$("#toggle-down").click(function () {
    tDown();
    slideChange();
});

//toggleUp click command
$("#toggle-up").click(function () {
    tUp();
    slideChange();
});

//swipe commands
$(window).load(function () {
    $("#slider").on("swiperight", swiperightHandler);
    function swiperightHandler() {
        tDown();
        slideChange();
    }
    $("#slider").on("swipeleft", swipeleftHandler);
    function swipeleftHandler() {
        tUp();
        slideChange();
    }
});


//control list commands 
$(".slide-select").click(function () {
    $(".slide").removeClass("top-slide");
    var slideIndex = $(".slide-select").index(this);
    var c;
    i = slideIndex;
    if (i === $(".slide-select").length) {
        c = 0;
    } else {
        c = i + 1;
    }
    var $top = $(".slide")[c];
    $($top).addClass("top-slide");
    slideChange();
});

$(document).ready(function () {
    setInterval(function () { $("#toggle-down").click(); }, 5000);
});
//----------------------------------------------------------------------
//          PRICE SLIDER
//----------------------------------------------------------------------
$(function () {
    $("#slider-range").slider({
        range: true,
        min: 1000,
        max: 20000,
        values: [1000, 20000],
        slide: function (event, ui) {
            $("#amount").val(ui.values[1] + " تومان - " + ui.values[0] + " تومان ");
        }
    });
    //$( "#amount" ).val( "تومان" + $( "#slider-range" ).slider( "values", 0 ) +
    //  " - تومان" + $( "#slider-range" ).slider( "values", 1 ) );

    $("#amount").val($("#slider-range").slider("values", 1) + "تومان - " + $("#slider-range").slider("values", 0) + "تومان  ");
});

//-----------------------------------------------//
//      MULTI SELECT DROP DOWN
//-----------------------------------------------//
$(document).on('click', '.multiSel span', function () {
    var name = $(this).text().split(':');
    $(".mutliSelect li").each(function () {
        if ($(this).children('input[type="checkbox"]').val().trim() == name[1].trim()) {
            $(this).children('input[type="checkbox"]').attr("checked", false);
        }
    });
    $(this).remove();
    $('.multiSel').append('');
});
function drpopen(el) {
    $('.mutliSelect ul').slideUp('fast');
    $('dt').children().children('span').removeClass('selectlabel');
    $(el).parent('dt').next('dd').find('.mutliSelect ul').slideToggle('fast');
    $(el).prev('.multiSel').addClass('inselect');
    $(el).children().addClass('selectlabel');
}
$(".dropdown dd ul li a").on('click', function () {
    $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});

$('.mutliSelect input[type="checkbox"]').on('click', function () {

    var type = $(".selectlabel").text();
    var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
      title = $(".selectlabel").text() + ': ' + $(this).val();

    if ($(this).is(':checked')) {
        var html = '<span title="' + title + '">' + title + '</span>';
        $('.multiSel').append(html);
    } else {
        $('span[title="' + title + '"]').remove();
        $('.multiSel').append('');

    }
});
//-----------------------------------------------//
//      PRODUCT LIST ITEM -- DETAIL
//-----------------------------------------------//

function showInfo(el) {
    
    $(el).closest('figure').find('#info').addClass('show-dtl').slideToggle();  
}
$(document).on('click', '.show-dtl i', function () {
    $(this).closest('.show-dtl').slideToggle();
});
//-----------------------------------------------//
//      PRODUCT LIST ITEM -- COMPARE
//-----------------------------------------------//
function compare(el) {
    var num = parseInt($("#myBtn i").text());
    //alert(num);

    if ($(el).is(':checked')) {
        $(el).parents('.options').css("display", "block");
        num = num + 1;
        if (num <= 4) {
            $("#myBtn i").text(num);
        }
        else {
            $(el).prop('checked', false);
            $(el).parents('.options').css("display", "none");
            alert("full");

        }
    }

    else {
        $(el).parents('.options').css("display", "none");
        num = num - 1;
        if (num >= 0) {
            $("#myBtn i").text(num);
        }
    }



}
//-----------------------------------------------//
//      PRODUCT LIST ITEM -- myModal
//-----------------------------------------------//

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("exit")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    if (parseInt($("#myBtn i").text()) > 1) {
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//-----------------------------------------------//
//      SLIDER
//-----------------------------------------------//
// buttons
var sliderControl = document.querySelector(".slider-control");

// slides informations
var slides = document.querySelectorAll(".slide"),
    slidesLength = slides.length;

// slides array
var slidesArr = [].slice.call(slides);

// reverse array sorting
slidesArr = slidesArr.reverse();

// slide current
var slideCurrent = 0;

sliderControl.addEventListener("click", function (e) {
    target = e.target;

    // get next button
    if (target.classList.contains("next")) {

        next = e.target,
        prev = next.previousElementSibling,
        nextSlide = slidesArr[slideCurrent + 1],
        slide = slidesArr[slideCurrent];

        slide.classList.add("slide-on");
        slide.classList.remove("text-on");
        nextSlide.classList.add("text-on");

        slideCurrent += 1;

        if (slideCurrent > 0) {
            prev.classList.remove("disabled");
        }

        if (slideCurrent === slidesLength - 1) {
            next.classList.add("disabled");
        }
    }

    // get prev button
    if (target.classList.contains("prev")) {

        slideCurrent -= 1;

        prev = e.target,
        next = prev.nextElementSibling,
        prevSlide = slidesArr[slideCurrent + 1],
        slide = slidesArr[slideCurrent];

        prevSlide.classList.remove("text-on");
        slide.classList.remove("slide-on");
        slide.classList.add("text-on");

        if (slideCurrent === slidesLength - 2) {
            next.classList.remove("disabled");
        }

        if (slideCurrent === 0) {
            prev.classList.add("disabled");
        }

    }

});
