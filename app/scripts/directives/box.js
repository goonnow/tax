'use strict';

app.directive('box', function() {
    return {
        templateUrl: 'views/box.html',
        restrict: 'E',
        replace: true,
        scope: {
            title: '@',
            classModifier: '@',
        },
        controller: BoxCtrl
    };
});
