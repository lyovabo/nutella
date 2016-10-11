(function() {
    "use strict";
    angular.module('Nutella.directives')
        .directive('mainForm', function() {
            console.log('mainForm');
            var toggle = function(elm) {
                if (elm.offsetWidth > 0 || elm.offsetHeight > 0) {
                    elm.style.opacity = '0';
                    setTimeout(function() { elm.style.display = 'none'; }, 500);
                } else {
                    elm.style.display = 'block';
                    setTimeout(function() { elm.style.opacity = '1'; }, 500);
                }
            }

            return {
                scope: {
                    text: '=text',
                    placeholder: '=placeholder'
                },
                controller: function($scope) {


                    var checkEmailValidity = function(str) {
                        var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                        return str.match(pattern);
                    }

                    $scope.submit = function() {

                        if (!$scope.message || $scope.message.length === 0) {
                            var message = document.querySelectorAll('main-form textarea')[0];
                            message.classList.add('invalid');

                            message.addEventListener('keyup', function() {
                                console.log('asdf')
                                if ($scope.message.length > 0) {
                                    message.classList.remove('invalid');
                                } else {
                                    message.classList.add('invalid');
                                }
                            })

                        } else if (!$scope.email || $scope.email.length === 0 || !checkEmailValidity($scope.email)) {
                            var email = document.querySelectorAll('main-form input[type=text]')[0];
                            email.classList.add('invalid');

                            email.addEventListener('keypress', function() {
                                if (checkEmailValidity($scope.email)) {
                                    email.classList.remove('invalid');
                                } else {
                                    email.classList.add('invalid');
                                }

                            })
                        } else {
                            toggle(document.getElementById('main-form-wrapper'));
                            setTimeout(function() {
                                toggle(document.getElementById('thanks'))
                            }, 500);
                        }
                    }
                },
                templateUrl: "./js/directives/templates/main-form.html",

            }
        })
})()
