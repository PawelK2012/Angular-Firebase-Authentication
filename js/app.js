var myApp = angular.module('myApp', ['ngRoute', 'firebase', 'authController']).constant('FIREBASE_URL', 'https://fix-lib.firebaseio.com/');
myApp.run(['$rootScope', '$location',
  function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error == 'AUTH_REQUIRED') {
        $rootScope.message = 'Sorry, you must log in to access that page';
        $location.path('/login');
      } // AUTH REQUIRED
    }); //event info
  }
]); //run
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/registration', {
    templateUrl: 'views/registration.html',
    cotroller: 'RegistrationController'
  }).
  when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  }).
  when('/success', {
    templateUrl: 'views/success.html',
    resolve: {
      currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //currentAuth
    } //resolve
  }).
  otherwise({
    redirectTo: '/registration'
  });
}]);