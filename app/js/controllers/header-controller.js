(function() {
    'use strict';
    angular.module('Nutella.ctrl').controller('headerController', ['$rootScope', '$scope', headerController]);

    function headerController($rootScope, $scope) {
        $rootScope.logo = 'Nutella';
        this.items = ['customize your label now', 'send a gif message', 'nutella website'];
        this.city = 'singapore';
        console.log('headerController')
    }
})();
