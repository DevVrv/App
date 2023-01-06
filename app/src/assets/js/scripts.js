"use strict";

$().DOM(() => {

    function acordion(selector) {
        const acordion = $(selector);
        const acordionToggler = $('[data-toggler]', acordion);


        acordionToggler.event({
            handler: asunc function() {
                acordionToggler.attr({
                    name: 'data-toggler',
                    value: ['hide', 'show'],
                    mode: 'state',
                    elems: target
                }).await();
            
            },
        });
    } 
    acordion('[data-toggle="acordion"]');

    

});
