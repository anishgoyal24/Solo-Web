$(window).on('load', function(){
    $('#status').fadeOut('slow');
    $('#preloader').fadeOut('slow');
});

$(function(){
    $('#team-members').owlCarousel({
        items:2,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoPlayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ]
    })
});

$(function(){
    $('#progress-elements').waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 1000);
        });
        this.destroy();
    }, {offset:'bottom-in-view'});
});

$(function(){
    $('#services-tabs').responsiveTabs({
        startCollapsed: 'accordion',
        animation: 'slide'
    });
});

$(window).on('load', function(){
    var grid = $("#isotope-container").isotope({});
    $("#isotope-filters").on('click', 'button', function(){
        var filterValue = $(this).attr('data-filter');
        grid.isotope({filter:filterValue});
        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass('active');
    });
});

$(function (){
    $("#portfolio-wrapper").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });
});