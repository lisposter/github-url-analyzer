'use strict';

var should = require('should');
var analyzer = require('..');

describe('sort:', function() {
  it('should return a object', function() {
    analyzer('lisposter/github-url-analyzer').should.be.an.instanceOf(Object).and.have.properties(['repo', 'https', 'git', 'ssh']);
  });
});
