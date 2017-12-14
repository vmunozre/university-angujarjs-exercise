var app = angular.module('universityApp', []);

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
                templateUrl: 'app/templates/dashboard.html'
            })   
        .when('/addStudent',
            {
                controller: 'NewStudentController',
                templateUrl: 'app/templates/studentForm.html'
            })   
        .when('/details/:itemId',
            {
                controller: 'DetailsItemController',
                templateUrl: 'app/templates/itemForm.html'
            })
        .when('/edit/:id',
            {
                controller: 'EditStudentController',
                templateUrl: 'app/templates/studentForm.html'
            })
        .otherwise({ redirectTo: '/dashboard' });
});