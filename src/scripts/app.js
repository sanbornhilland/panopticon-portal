
'use strict';


var angular = require('angular');
var queryString = require('query-string');


angular.module('panopticonPortal', [])
       .config(config)
       .run(run);


config.$inject = ['$logProvider'];


function config($logProvider) {
  var params = queryString.parse(location.search);
  var debug = params.debug = 'true';

  $logProvider.debugEnabled(debug);
}


run.$inject = ['$rootScope', '$log'];


function run($rootScope, $log) {
  $log.log('Running application....');

  $rootScope.appName = 'Panopticon';

  $rootScope.appVersion = '0.0';
}
