var app = angular.module('universitytApp', []);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login',
            {
                controller: 'LoginController',
                templateUrl: 'app/templates/login.html'
            }) 
        .when('/dashboard',
            {
                controller: 'DashboardController',
                templateUrl: 'app/templates/items.html'
            })   
        .when('/addStudent',
            {
                controller: 'NewStudentController',
                templateUrl: 'app/templates/itemForm.html'
            })   
        .when('/details/:itemId',
            {
                controller: 'DetailsItemController',
                templateUrl: 'app/templates/itemForm.html'
            })
        .when('/edit/:itemId',
            {
                controller: 'EditItemController',
                templateUrl: 'app/templates/itemForm.html'
            })
        .otherwise({ redirectTo: '/login' });
});