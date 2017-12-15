app.factory("StudentsFactory", function () {

    var students = [{
            name: "Batman",
            grade: 2,
            subjets: [],
            id: 1
        },
        {
            name: "Superman",
            grade: 5,
            subjets: [],
            id: 2
        },
        {
            name: "Wonder Woman",
            grade: 2,
            subjets: [],
            id: 3
        }
    ];

    return {
        all: function () {
            return students;
        },
        get: function (_id) {
            for(var i = 0, iLen = students.length; i<iLen; i++){
                if(students[i].id === _id){
                    return students[i];
                }
            }
            return undefined;
        },
        add: function (_student) {
            var newId = getNextId(students);
            _student.id = newId;
            students.push(_student);
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
        remove: function (_id) {
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

app.factory('SubjetsService', function ($http, $q) {
    return{
        get: function(){
            var deferred = $q.defer();
            $http.get("app/mocks/subjets.json").success(function(_response) {
                deferred.resolve(_response);                
            });
            return deferred.promise;
        }
    }
});
