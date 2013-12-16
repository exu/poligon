'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('myApp.filters'));


  describe('interpolate', function() {

    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));


    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });


  describe('reverse', function () {

    it('should reverse a string', inject(function (reverseFilter) {
      expect(reverseFilter('ABCD')).toEqual('DCBA');
    }));

    it('should reverse a INT', inject(function (reverseFilter) {
      expect(reverseFilter(123123)).toEqual('321321');
    }));

  });
});
