(function() {
    'use strict';

    angular.module('myApp.user', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/user', {
            restrict: 'E',
            templateUrl: 'views/user/user.partial.html',
            controller: 'UserCtrl',
            controllerAs: 'vm',
            bindToController: true,
            resolve: {
                getRequireAuth: function(authenticationService) {
                    return authenticationService.getRequireAuth();
                }
            }
        });
    }])

    .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$rootScope', 'authenticationService']

    function UserCtrl($rootScope, authenticationService) {

        var vm = this;
        vm.currentUser = $rootScope.currentUser;

        vm.updateEmail = function(emailOld, emailNew, pass) {
            authenticationService.changeEmail(emailOld, emailNew, pass);
        }

    };
})();
