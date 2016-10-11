(function() {

    'use strict';
    angular.module('Nutella.ctrl').controller('contentController', ['$scope', function($scope) {
        console.log('contentController');
        this.formText = 'Type your message here...';
        this.emailText = 'Your email';
    }]);

})();
