(function() {

    'use strict';
    angular.module('Nutella.ctrl').controller('footerController', ['$scope', function($scope) {
        console.log('footerController');
        this.leftMenu = ['FAQ', 'Customer service'];
        this.rightMenu = ['ferro.com', 'ferro csr', 'ferro careers', 'ferro hazlenut company',
            'ferro linkedin', 'world nutella day', 'tictac.com', 'kinder.com', 'ferrorocher.com'
        ];
        this.bottomMenu = ['© FERRERO 2015, ALL RIGHTS RESERVED ', 'Terms of use', 'Privacy Policy',
            'Cookies Policy', 'Technical requirement'
        ]
    }]);

})();
