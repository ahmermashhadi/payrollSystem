(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: EditEmployee', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.editEmployee'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('EditEmployee', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());