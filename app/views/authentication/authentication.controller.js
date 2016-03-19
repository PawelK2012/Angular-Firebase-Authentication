(function() {
    'use strict';

    angular.module('myApp.authentication', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/authentication', {
            restrict: 'E',
            templateUrl: 'views/authentication/authentication.partial.html',
            controller: 'AuthenticationCtrl',
            controllerAs: 'vm',
            bindToController: true
        });
    }])

    .controller('AuthenticationCtrl', AuthenticationCtrl);

    AuthenticationCtrl.$inject = ['authenticationService']

    function AuthenticationCtrl(authenticationService) {

        var vm = this;
        vm.login = function(email, pass) {
            authenticationService.getLogin(email, pass);
        }
        vm.register = function(name, email, pass) {
            authenticationService.getRegister(name, email, pass);
        }
    };
})();
