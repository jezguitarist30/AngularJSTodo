define([
  'angular',
  'angularResource',
  'angularRoute',
  'app/factory/index',
  'app/controllers/index'
], function (angular) {
  var TodoApp = angular.module('TodoApp', [
      'ngResource',
      'ngRoute',
      'app.services',
      'app.controllers'
    ]).config([
      '$routeProvider',
      '$locationProvider',
      function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
          controller: 'TodoCtrl',
          templateUrl: 'Scripts/app/templates/list.html'
        }).when('/add', {
          controller: 'CreateCtrl',
          templateUrl: 'Scripts/app/templates/Details.html'
        }).when('/edit/:EditId', {
          controller: 'UpdateCtrl',
          templateUrl: 'Scripts/app/templates/Details.html'
        }).otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
      }
    ]).directive('greet', function () {
      return {
        template: '<h1>{{from}} says Happy Birthday to {{to}}</h1>',
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ($scope, $element, $attrs) {
            $scope.from = $attrs.from;
            $scope.to = $attrs.greet;
          }
        ]
      };
    }).directive('sorted', function () {
      return {
        scope: true,
        transclude: true,
        template: '<a ng-click="do_sort()" ng-transclude></a>' + '<span ng-show="do_show(true)"><i class="icon-circle-arrow-down"></i></span>' + '<span ng-show="do_show(false)"><i class="icon-circle-arrow-up"></i></span>',
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ($scope, $element, $attrs) {
            $scope.sort = $attrs.sorted;
            $scope.do_sort = function () {
              $scope.sort_by($scope.sort);
            };
            $scope.do_show = function (asc) {
              return true;
            };
          }
        ]
      };
    });
  return TodoApp;
});