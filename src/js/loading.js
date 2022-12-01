import $ from "jquery";

$(window).on('load', function () {

    setInterval(() => {
        $("#NavBarPage").fadeIn("slow");
        $("#AppPage").fadeIn("slow");
        $("#loadingRing").fadeOut("fast");
    }, 2000);

})