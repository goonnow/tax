'use strict';

angular.module('taxApp').directive('element', function() {
    return {
        templateUrl: 'views/element.html',
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        }
    };
});
