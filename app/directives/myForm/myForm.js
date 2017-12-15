app.directive('myform', function () {
    return {
        restrict: 'E',
        scope: '=',
        replace: true,
        link: function($scope, $element, $attrs) {
            $scope.addSubjet = function(){
                var subjet = {
                    id: $scope.selected.id,
                    name: $scope.selected.name,
                }
                $scope.student.subjets.push(subjet);
            }
        },
        templateUrl:'app/directives/myForm/myForm.html',
        replace: true
      };
});