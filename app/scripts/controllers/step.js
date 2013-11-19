'use strict';

/*global app */
/*global TAX */
app.controller('StepCtrl', function ($scope, $routeParams, $rootScope ) {
    $scope.id = parseInt($routeParams.id) || 0;
    $scope.name = steps[$scope.id].name;

    $scope.templateUrl = 'views/steps/'+ $scope.name + '.html';

    $rootScope.currentStep = $scope.id;

});
