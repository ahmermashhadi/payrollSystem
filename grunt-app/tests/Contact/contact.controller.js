(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: Contact', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.Contact'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('Contact', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());