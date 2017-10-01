require('mocha')
var gs266 = require('../')
var should = require('should')
var affected = require('./affected')
var notAffected = require('./not-affected')

describe('gs266', function() {
  it('should return true', function() {
    gs266(affected).should.eql(true)
  })
  it('should return false', function() {
    gs266(notAffected).should.eql(false)
  })
})
