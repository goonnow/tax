'use strict';

app.controller('MainCtrl', function ($scope) {

    $scope.income =0;
    $scope.deduction =0;

    $scope.diff = function(){
        return $scope.income - $scope.deduction;
    }
});
