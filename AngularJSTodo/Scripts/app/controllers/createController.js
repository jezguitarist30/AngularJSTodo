﻿define([
    'app/modules/controller'
], function (appController) {

    appController.controller('CreateCtrl', ["$scope", "$location", "peopleService", "TodoList", function ($scope, $location, peopleService, TodoList) {

        $scope.action = "Add";

        $scope.getResultForPeople = peopleService.getPeopleResponse();

        $scope.save = function () {

            TodoList.save($scope.item, function () {

                $location.path("/");

            });

        };

    }]);


});


