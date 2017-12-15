app.directive('subjet', function () {
    return {
        restrict: 'E',
        scope: '=',
        replace: true,
        link: function($scope, $element, $attrs) {},
        templateUrl:'app/directives/subjet/subjet.html',
        replace: true
      };
});