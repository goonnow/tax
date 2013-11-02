'use strict';

angular.module('taxApp')
  .controller('IncomeCtrl', function ($scope) {
    $scope.list = [
        {
            desc: 'Salary',
            placeholder: '120000'
        }
    ];

    $scope.addRecord = function() {
        $scope.list.push( {
            desc: 'Bonus',
            placeholder: '12000'
        });
    };

    $scope.sum = function(){
        var sum = 0;
        angular.forEach( $scope.list, function(data, key){
            if( data.value ) {
                sum += parseInt(data.value);
            }
        });

        return sum;
    };
  });
