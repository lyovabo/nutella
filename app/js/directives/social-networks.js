(function() {
    "use strict";
    angular.module('Nutella.directives')
        .directive('socialNetworks', function() {
            console.log('socialNetworks');

            return {
                scope: {
                    city: '=city'
                },
                templateUrl: "./js/directives/templates/social-networks.html",

            }
        })
})()
