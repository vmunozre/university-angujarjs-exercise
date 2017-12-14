app.controller('DashboardController', function ($scope, $translate, StudentsFactory) {
    init();

    function init() {
        $scope.students = StudentsFactory.all();
    }

    $scope.deleteStudent = function(_id){
        StudentsFactory.remove(_id);
    }
    $scope.changeLang = function(_lang){
        $translate.use(_lang);
    }
});

app.controller('NewStudentController', function ($scope, $location, SubjetsService, StudentsFactory) {
    init();

    function init() {
        resetForm();
        var promise = SubjetsService.get()
            .then(function(_response){
                $scope.subjets = _response;
            });

        $scope.btnText = 'Añadir';
        $scope.disabled = '';
        
    }
    $scope.addSubjet = function(){
        var subjet = {
            id: $scope.selected.id,
            name: $scope.selected.name,
        }
        $scope.student.subjets.push(subjet);
    }
    $scope.actionBtn = function(){        
        var newStudent = $scope.student;
        StudentsFactory.add(newStudent);
        $location.path("/dashboard");
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
app.controller('EditStudentController', function ($scope, $routeParams, $location, SubjetsService, StudentsFactory) {
    init();
    function init() {
        var id = ($routeParams.id) ? parseInt($routeParams.id) : -1;
        var promise = SubjetsService.get()
            .then(function(_response){
                $scope.subjets = _response;
            });

        $scope.student = StudentsFactory.get(id);
        $scope.btnText = 'Edit';
        $scope.disabled = '';
    }
    $scope.addSubjet = function(){
        var subjet = {
            id: $scope.selected.id,
            name: $scope.selected.name,
        }
        $scope.student.subjets.push(subjet);
    }
    $scope.actionBtn = function(){        
        var newStudent = $scope.student;
        StudentsFactory.update(newStudent);
        $location.path("/dashboard");
    }

    $scope.resetAction = function(){
        resetForm();
    }
    function resetForm(){
        $scope.student = {
            subjets: []
        };
    }
});

app.controller('DetailsStudentController', function ($scope, $routeParams, $location, StudentsFactory) {
    init();

    function init() {
        var id = ($routeParams.id) ? parseInt($routeParams.id) : -1;
        var student = StudentsFactory.get(id);
        if(student != undefined){
            $scope.student = student;
        } else {
            alert('ID del alumno no encontrado');
            $location.path('/dashboard');
        }            
        
        $scope.disabled = 'disabled';
        $scope.btnText = 'Añadir';
    }
});