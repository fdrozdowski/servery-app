/*global todomvc */
'use strict';

/**
 * Services that provide access to the servery API.
 */
var serveryApi = angular.module('serveryApi', ['ngResource']);

serveryApi.factory('Servery', ['$resource', function($resource) {
  return $resource(
    'api/serveries/:serveryId',
    {},
    {
      all: {method: 'GET', params: {}, isArray: true},
      query:{method: 'GET', params: {serveryId:'serveryId'}},
      nextMeals:{method: 'GET',params:{}, url: '/api/serveries/next_meals', isArray: true}
    });
}]);

serveryApi.factory('Menu', ['$resource', function($resource) {
  return $resource(
    'api/serveries/:serveryId/menu',
    {},
    {
            query: {method: 'GET', params: {serveryId:'serveryId',date:"no date provided"}}
    });
}]);

var userApi = angular.module('userApi', ['ngResource']);

userApi.factory('User', ['$resource', function($resource) {
        return $resource(
            'api/user',
            {},
            {
                current_user: {method: 'GET' },
                save: {method: 'POST'},
                logout: {method : 'POST', url: '/auth/logout'}
            });
}]);
                    
