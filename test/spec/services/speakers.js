'use strict';

describe('Service: speakers', function () {

  // load the service's module
  beforeEach(module('aerogearDevnexusApp'));

  // instantiate service
  var speakers;
  beforeEach(inject(function(_speakers_) {
    speakers = _speakers_;
  }));

  it('should do something', function () {
    expect(!!speakers).toBe(true);
  });

});
