﻿define([
    'app/modules/controller'
], function (appController) {

    appController.controller('UpdateCtrl', ["$scope", "$location", "$routeParams", "TodoList", function ($scope, $location, $routeParams, TodoList) {
        
        $scope.action = "Update";

        var id = $routeParams.EditId;

        $scope.item = TodoList.get({ id: id });

        $scope.save = function() {

            TodoList.update({ id: id }, $scope.item, function() {

                $location.path("/");

            });

        };

    }]);


});