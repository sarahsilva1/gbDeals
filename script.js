// create the module and name it scotchApp
const angularApp = angular.module('angularApp', ['ngRoute']);

// configure our routes
angularApp.config(function($routeProvider) {
  $routeProvider

        // route for the home page
        .when('/', {
          templateUrl: 'pages/home.html',
          controller: 'mainController'
        })

        // route for the about page
        .when('/deals', {
          templateUrl: 'pages/deals.html',
          controller : 'dealsController'
        })

        // route for the contact page
        .when('/game', {
          templateUrl: 'pages/game.html',
          controller: 'gameController'
        });
});


// create the controller and inject Angular's $scope
angularApp.controller('mainController', function($scope) {
    // create a message to display in our view
  // $scope.message = 'Everyone come and see how good I look!';
});

angularApp.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

angularApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.'
});
