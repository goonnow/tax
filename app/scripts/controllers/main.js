'use strict';

/*global app */
app.controller('MainCtrl', function ($scope) {

    $scope.income =0;
    $scope.deduction =0;

    $scope.$watch( 'income', function(){
        updateData();
    });

    $scope.$watch( 'deduction', function(){
        updateData();
    });

    function updateData() {
        $scope.diff = $scope.income - $scope.deduction;
        $scope.tax = TAX($scope.diff);
    }

});
