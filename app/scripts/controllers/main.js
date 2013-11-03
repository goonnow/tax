'use strict';

app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [ 'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.income =0;
    $scope.deduction =0;

    $scope.diff = function(){
        return $scope.income - $scope.deduction;
    }
});
