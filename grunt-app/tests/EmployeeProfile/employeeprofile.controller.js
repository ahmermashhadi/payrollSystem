(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: EmployeeProfile', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.EmployeeProfile'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('EmployeeProfile', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
