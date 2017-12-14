app.controller('DashboardController', function ($scope, subjectsService, StudentsFactory) {
    init();

    function init() {
        $scope.students = StudentsFactory.all();
    }

});
