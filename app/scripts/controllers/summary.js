'use strict';
app.controller('SummaryCtrl', function ($scope, $routeParams ) {

    $scope.totalIncome = toInt($scope.items.salary.value)
        + toInt($scope.items.bonus.value);

    $scope.totalDeduction = toInt($scope.items.expense.value)
        + toInt(items.personalDecution.value)
        + toInt(items.LTF.value);

    $scope.netIncome = $scope.totalIncome - $scope.totalDeduction;

    $scope.tax = TAX($scope.netIncome);


    function toInt(value) {
        return parseInt( value || 0 );
    }



});

