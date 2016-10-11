(function() {
    "use strict";
    angular.module('Nutella.directives')
        .directive('mainMenu', function() {
            console.log('main-menu');

            return {
                scope: {
                    menuItems: '=items'
                },
                templateUrl: "./js/directives/templates/main-menu.html",

            }
        })
})()
