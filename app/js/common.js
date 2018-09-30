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
        trigger = $('.js-menu-trigger')
    ;

    trigger.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        menu.toggleClass('show');
        overlay.toggleClass('active');
    });
})();