var app = angular.module('universityApp', ['pascalprecht.translate']);

app.config(function ($routeProvider, $translateProvider) {
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
        .when('/details/:id',
            {
                controller: 'DetailsStudentController',
                templateUrl: 'app/templates/studentForm.html'
            })
        .when('/edit/:id',
            {
                controller: 'EditStudentController',
                templateUrl: 'app/templates/studentForm.html'
            })
        .otherwise({ redirectTo: '/dashboard' });
    $translateProvider.translations('en', {
        BTN_ES: 'Spanish',
        BTN_EN: 'English',
        TEXT_NOMBRE: 'Name',
        TEXT_CURSO: 'Grade',
        TEXT_ASIGNATURAS: 'Subjets',
        TEXT_DETALLES: 'Details',
        TEXT_EDITAR: 'Edit',
        TEXT_ADD: 'Add',
        TEXT_ELIMINAR: 'Delete',
        TEXT_ADD_ALUMNO: 'New Student',
        TEXT_ADD_ASIGNATURA: 'Add Subject',
        TEXT_RESET: 'Reset',
        TEXT_VOLVER: 'Return'

    });
    $translateProvider.translations('es', {
        BTN_ES: 'Español',
        BTN_EN: 'Ingles',
        TEXT_NOMBRE: 'Nombre',
        TEXT_CURSO: 'Curso',
        TEXT_ASIGNATURAS: 'Asignaturas',
        TEXT_DETALLES: 'Detalles',
        TEXT_EDITAR: 'Editar',
        TEXT_ADD: 'Añadir',
        TEXT_ELIMINAR: 'Eliminar',
        TEXT_ADD_ALUMNO: 'Nuevo Alumno',
        TEXT_ADD_ASIGNATURA: 'Añadir Asignatura',
        TEXT_RESET: 'Resetear',
        TEXT_VOLVER: 'Volver'
    });

    $translateProvider.preferredLanguage('es');
});