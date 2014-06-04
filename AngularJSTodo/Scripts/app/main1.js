require.config({
    baseUrl: '../',
    paths: {

        jquery: 'lib/jquery-1.9.1.min',
        angular: 'lib/angular.min',
        angularResource: 'lib/angular-resource.min',
        angularRoute: 'lib/angular-route.min',
        app: 'Scripts/app/app'

    },


    shim: {
        
        //declaring dependencies
        jquery: { exports: 'jquery' },
        angular: { exports: 'angular' },
        angularResource: ['angular'],
        angularRoute: ['angular']

    }


});


require(['jquery', 'angular','app'], function() {

    angular.bootstrap(document, ['TodoApp']);

});

