(function() {
    'use strict';

    angular.module('myApp.navMenu', ['ngRoute'])

    .directive('navMenu', function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/nav/nav-menu.partial.html',
            controller: NavMenuController,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                currentUser: '=currentUser'
            }
        };
    });

    function NavMenuController(authenticationService) {
        var vm = this;
        vm.logOut = function() {
           authenticationService.getLogout();
        }
    }

})();
