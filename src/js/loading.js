import $ from "jquery";

$(window).on('load', function () {

    $('.particle').hide();
    setTimeout(() => {
        $('.particle').show('slow');
    }, 3000);
    setInterval(() => {
        $("#NavBarPage").fadeIn("slow");
        $("#AppPage").fadeIn("slow");
        $("#loadingRing").fadeOut("fast");
    }, 2000);

})