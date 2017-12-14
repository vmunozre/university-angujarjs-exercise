app.factory("StudentsFactory", function () {

    var students = [{
            name: "Peter",
            grade: 2,
            subjets: [],
            id: 1
        },
        {
            name: "Stefan",
            age: 5,
            subjets: [],
            id: 2
        },
        {
            name: "Agnes",
            age: 2,
            subjets: [],
            id: 3
        }
    ];

    return {
        all: function () {
            return subjets;
        },
        get: function (_id) {
            for(var i = 0, iLen = subjets.length; i<iLen; i++){
                if(subjets[i].id === _id){
                    return subjets[i];
                }
            }
            return undefined;
        },
        add: function (_student) {
            var newId = getNextId(students);
            _student.id = newId;
            students = _student;
        },
        update: function (_student) {
            var filterArray = students.filter(function(obj){
                return obj.id === _student.id;            
            });
            if(filterArray != undefined && filterArray.length > 0){
                var editedStudent = filterArray[0];
                editedStudent = _student;
            }
        },
        delete: function (_id) {
            for(var i = 0, iLen = students.length; i<iLen; i++){
                if(students[i].id === _id){
                    students.splice(i,1);
                    break;
                }
            }
        }
    };

    function getNextId(_array){
        var nMax = -1;
        for(var i = 0, iLen = _array.length; i<iLen; i++){
            nMax = Math.max(nMax, _array[i].id);            
        }
        nMax++;
        return nMax;
    }
});

app.service('subjectsService', function ($http) {
    this.getSubject = function () {
        $http.get("app/mocks/subjects.json").success(function(_subjets) {
            return _subjets;
        });
    };
});
