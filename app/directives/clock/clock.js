app.directive('clock', function () {
    function formatNum(_num){
        var string = String(_num);
        while(string.length < 2){
            string = '0' + string;
        }
        return string;
    }
    return {
        restrict: 'E',
        scope: '=',
        replace: true,
        link: function($scope, $element, $attrs) {
            var date = new Date();
            $scope.hours = formatNum(date.getHours());
            $scope.minutes = formatNum(date.getMinutes());
            $scope.seconds = formatNum(date.getSeconds());
            setInterval(function(){
                date = new Date();
                $scope.hours = formatNum(date.getHours());
                $scope.minutes = formatNum(date.getMinutes());
                $scope.seconds = formatNum(date.getSeconds());
                $scope.$apply();
            },1000);
        },
        templateUrl:'app/directives/clock/clock.html',
        replace: true
      };
});