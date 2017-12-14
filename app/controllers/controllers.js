app.controller('DashboardController', function ($scope, subjectsService, StudentsFactory) {
    init();

    function init() {
        $scope.students = StudentsFactory.all();
    }

    $scope.deleteStudent = function(_id){
        StudentsFactory.remove(_id);
    }

});

app.controller('NewStudentController', function ($scope, $location, subjectsService, StudentsFactory) {
    init();

    function init() {
        resetForm();
        $scope.btnText = 'Añadir';
        $scope.disabled = '';
    }

    $scope.actionBtn = function(){        
        var newStudent = $scope.student;
        StudentsFactory.add(newStudent);
        $location.path("/dashboard")
    }

    $scope.resetAction = function(){
        resetForm();
    }
    function resetForm(){
        $scope.student = {
            subjets:[]
        }
    }
});
app.controller('EditStudentController', function ($scope, $routeParams, $location, subjectsService, StudentsFactory) {
    init();

    function init() {
        var id = ($routeParams.id) ? parseInt($routeParams.id) : -1;
        $scope.student = StudentsFactory.get(id);
        $scope.btnText = 'Edit';
        $scope.disabled = '';
    }

    $scope.actionBtn = function(){        
        var newStudent = $scope.student;
        StudentsFactory.update(newStudent);
        $location.path("/dashboard")
    }

    $scope.resetAction = function(){
        resetForm();
    }
    function resetForm(){
        $scope.student = {
            subjets:[]
        }
    }
});