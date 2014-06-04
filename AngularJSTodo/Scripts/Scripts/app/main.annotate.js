require.config({
  baseUrl: '../Scripts',
  paths: {
    jquery: 'lib/jquery-1.9.1.min',
    angular: 'lib/angular.min',
    angularResource: 'lib/angular-resource.min',
    angularRoute: 'lib/angular-route.min'
  },
  shim: {
    jquery: { exports: 'jquery' },
    angular: { exports: 'angular' },
    angularResource: ['angular'],
    angularRoute: ['angular']
  }
});
require([
  'jquery',
  'angular',
  'app/app.annotate'
], function () {
  angular.bootstrap(document, ['TodoApp']);
});