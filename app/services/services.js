/* Services */

var services = angular.module('university.services', ['ngResource']);

services.factory('UserFactory', function ($resource) {
    // return $resource('/00_AngularJS_Plus/rest/users', {}, {
    //     query: {
    //         method: 'GET',
    //         params: {},
    //         isArray: false
    //     }
    // });
});
