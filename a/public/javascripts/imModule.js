var img = angular.module('imgApp', ['ngRoute']);

img.config(["$routeProvider",
      function ($routeProvider) {
          $routeProvider
          .when('/happy', {
                  templateUrl: '/tmpl/' + 'img.html',
                  controller:  'imgController'
              })
          // .when('/operation/:id', {
          //          templateUrl: '/tmpl/' + name + '/operation.html',
          //          controller: name + 'guardianController'
          //      })
      }
]);