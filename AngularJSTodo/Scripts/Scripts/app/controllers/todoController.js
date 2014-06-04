define([
    'app/modules/controller'
], function (appController) {

    appController.controller('TodoCtrl', ["$scope", "$location", "peopleService", "TodoList", function ($scope, $location, peopleService, TodoList) {
        
            $scope.name = "JEZ REEL";

            $scope.getResultForPeople = peopleService.getPeopleResponse();

            $scope.changeResponse = function () {
                
                peopleService.savePeopleResponse($scope.getResultForPeople);

                $location.path('/add');
            };

            $scope.sort_order = "Id";
            $scope.is_desc = false;


            $scope.delete = function () {

                var id = this.todo.Id;

                TodoList.delete({ id: id }, function () {

                    $("#todo_" + id).fadeOut();

                });

            };

            $scope.reset = function () {

                $scope.limit = 20;
                $scope.offset = 0;
                $scope.items = [];
                $scope.more = false;

                $scope.search();

            };


            $scope.sort_by = function (col) {

                if ($scope.sort_order === col) {
                    $scope.is_desc = !$scope.is_desc;
                } else {
                    $scope.is_desc = false;
                }

                $scope.sort_order = col;
                $scope.reset();

            };

            $scope.do_show = function (asc) {
                return (asc != $scope.is_desc) && ($scope.sort_order == col);
            };

            $scope.show_more = function () {

                $scope.offset += $scope.limit;
                $scope.search();

            };


            $scope.search = function () {

                TodoList.query({ q: $scope.query, sort: $scope.sort_order, desc: $scope.is_desc, limit: $scope.limit, offset: $scope.offset }, function (data) {

                    $scope.more = data.length === 20;
                    $scope.items = $scope.items.concat(data);

                });

            };



            $scope.reset();


    }]);

});
