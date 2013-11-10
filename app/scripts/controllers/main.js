'use strict';

/*global app */
/*global TAX */
app.controller('MainCtrl', function ($scope, $rootScope) {

    $rootScope.income= 0;
    $rootScope.decution= 0;

    $scope.$watch( 'income', function(){
        $scope.$broadcast('income-changed', $scope.income );
        updateData();
    });

    $scope.$watch( 'deduction', function(){
        updateData();
    });

    function updateData() {
        $scope.diff = Math.max(0,$scope.income - $scope.deduction);
        $scope.tax = TAX($scope.diff);
    }

});
