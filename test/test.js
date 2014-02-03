var r = require('../');
var chai = require('chai');
var should = chai.should();
var assert = chai.assert;

/**
 * r.
 */

describe('r', function () {
  beforeEach(function () {
    r.user = '/users/:id';
    r.login = '/login';
    r.rooms = r.user + '/rooms/:rid';
  });

  describe('r()', function () {
    it('should return untransformed path without additional arguments', function () {
      assert(r('user') === r.user);
      assert(r('login') === r.login);
    });

    it('should return transformed path with additional arguments', function () {
      assert(r('user', 123) !== r.user);
      assert(r('user', 123) === '/users/123');
      assert(r('rooms', 123, 321) === '/users/123/rooms/321');
    });
  });
});