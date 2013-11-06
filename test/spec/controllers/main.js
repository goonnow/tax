'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('taxApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('initialize variable', function () {
    expect(scope.income).toBe(0);
    expect(scope.deduction).toBe(0);
  });

});
