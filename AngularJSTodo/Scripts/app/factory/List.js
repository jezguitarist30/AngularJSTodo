define([
    'app/modules/services'
], function (appServices) {

    //Since the $resource provide only GET,SAVE,QUERY,REMOVE and DELETE
    //Which supports only (GET,POST and DELETE) method
    //we are going to add a UPDATE and a PUT method
    appServices.factory('TodoList',["$resource", function ($resource) {
        return $resource('/api/todo/:id', { id: '@id' }, { update: { method: 'PUT' } });
    }]);


});