'use strict';
if(!window.console)window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// global variables
    var overlay = $('.overlay');
//

(function(){
})();

var mobMenu = (function() {
    var
        menu = $('.js-menu'),
        trigger = $('.js-menu-trigger'),
        menuItem = menu.find('.menu__link');
    ;

    function closeMenu(){
        overlay.removeClass('active');
        trigger.removeClass('active');
        menu.removeClass('show');
    };

    trigger.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        menu.toggleClass('show');
        overlay.toggleClass('active');
    });

    overlay.on('click', function () {
        closeMenu();
    });

    menuItem.on('click', function (e) {
        var
            href = $(this).attr('href'),
            target = $(href).offset().top
        ;
        e.preventDefault();
        $('body,html').animate({scrollTop: target}, 1500);
        closeMenu();
    });
})();

var mobSlider = (function(){

    var
        sld = $(".js-mob-slider"),
        isActive,
        $window = $(window)
    ;

    swiperFunc();

    $window.on('resize', swiperFunc);

    function swiperFunc() {
        var initNeeded = $window.width() < 600;

        isActive = isActive !== undefined ? isActive : !initNeeded;

        if(initNeeded && !isActive) {
            sld.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                variableWidth: true,
                centerMode: true,
                adaptiveHeight: true
            });

            isActive = true;
        }
        if(!initNeeded && isActive) {
            if(sld.hasClass('slick-initialized')){
                sld.slick('unslick');
            }
            isActive = false;
        }
    }
})();

var showMore = (function(){
    var
        container = $('.js-show-more'),
        toggleBtn = container.find('.faq__top'),
        textShow = container.find('.faq__text')
    ;

    toggleBtn.on('click', function () {
        var self = $(this);

        if (self.parent().hasClass('open')) {
            self.parent().removeClass('open');
            self.parent()
                .find('.faq__text')
                .slideUp();
            return false;
        }

        textShow.slideUp();
        container.removeClass('open');

        self.parent()
            .toggleClass('open')
            .find('.faq__text')
            .slideToggle()
        ;
    });
})();

var anchors = (function(){
    var
        container = $('.anchors'),
        anchor = container.find('a'),
        section = $('.js-section'),
        sectionNames = [],
        sectionPositions = []
    ;

    section.each(function () {
        sectionNames.push($(this).attr('id'));
        sectionPositions.push($(this).offset().top);
    });

    $(window).scroll(function () {
        var windowPosition = $(window).scrollTop() + 200;
        sectionPositions.forEach(function (value, i) {
            if (windowPosition > value) {
                anchor.removeClass('active')
                    .eq(i).addClass('active');
            }
        });
    });

    anchor.on('click', function (e) {
        e.preventDefault();
        var changePosition = 0;
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - changePosition
        }, 500);
    });
})();

var goTo = (function(){

    $('.js-scroll').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top-65;
        $('body,html').animate({scrollTop: target}, 1500);
    });
})();

var video = (function(){
    var
        btn = $('.js-play'),
        videoContainer = $('.js-play-container')
    ;
    btn.on('click', function (e) {
        var
            $this = $(this),
            videoLink = $this.attr('href');
        ;
        e.preventDefault();

        videoContainer.append('<iframe src="' +
            videoLink +
            '?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" frameborder="0"' +
            ' encrypted-media"' +
            'allowfullscreen></iframe>'
        );
        if($this.hasClass('active')) {
            videoContainer.find('iframe').remove();
        }
        $this.toggleClass('active');
    });
})();

var video2 = (function(){
    var
        btn = $('.js-play-btn'),
        container = btn.parent();
    ;
    btn.on('click', function (e) {
        var
            $this = $(this),
            videoLink = $this.attr('href');
        ;
        e.preventDefault();

        container.append('<iframe src="' +
            videoLink +
            '?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" frameborder="0"' +
            ' encrypted-media"' +
            'allowfullscreen></iframe>'
        );
        if($this.hasClass('active')) {
            videoContainer.find('iframe').remove();
        }
        $this.toggleClass('active');
    });
})();