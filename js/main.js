$( document ).ready(function() {

    // site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).load(function () {
        $('#preloader').delay(1200).fadeOut('slow', function () {
            $(this).remove();
        });
    });

    $("a.menuIcon").click(function(){
    	$("nav.navigation").toggleClass("showed");
    });
    $("nav.navigation ul li a").click(function(){
    	$("nav.navigation").removeClass("showed");
    });
    $("#startDemo").click(function(){
    	$("#positionContainer").show();
    	$(this).hide();
    	$("#stopDemo").show();
    });
    $("#stopDemo").click(function(){
    	$("#positionContainer").hide();
    	$(this).hide();
    	$("#startDemo").show();
    });
    $("a#hover").click(function(){
    	$(this).addClass("active");
    });

});