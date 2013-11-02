'use strict';

angular.module('taxApp')
  .controller('DeductionCtrl', function ($scope) {
    $scope.list = [
        {
            desc: 'Expense',
            placeholder: '60000'
        }
    ];

    $scope.addRecord = function() {
        $scope.list.push( {
            desc: 'LTF',
            placeholder: '5000'
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
