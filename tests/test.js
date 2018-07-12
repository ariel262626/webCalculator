
let convert = require('../Docker/calculator.js')


var state = null;
var assert = require('assert');
describe('Calculate Next State', function() {
  describe('calculateNextState', function() {
    it('Display should be "1"', function() {
        state = convert.calculateNextState(null, "1");
        assert.equal("1", state.display);
     });
     it('Display should be "12"', function() {
        state = convert.calculateNextState(state, "2");
        assert.equal("12", state.display);
     });
     it('Display should be "12"', function() {
        state = convert.calculateNextState(state, "+");
        assert.equal("12", state.display);
     });
     it('Display should be "5"', function() {
        state = convert.calculateNextState(state, "5");
        assert.equal("5", state.display);
     });
     it('Display should be "17"', function() {
        state = convert.calculateNextState(state, "=");
        assert.equal("17", state.display);
     });
     it('Display should be "17"', function() {
        state = convert.calculateNextState(state, "*");
        assert.equal("17", state.display);
     });
     it('Display should be "2"', function() {
        state = convert.calculateNextState(state, "2");
        assert.equal("2", state.display);
     });
     it('Display should be "2"', function() {
        state = convert.calculateNextState(state, "+");
        assert.equal("2", state.display);
     });
     it('Display should be "2"', function() {
        state = convert.calculateNextState(state, "2");
        assert.equal("2", state.display);
     });
     it('Display should be "36"', function() {
        state = convert.calculateNextState(state, "=");
        assert.equal("36", state.display);
     });
     it('Display should be "36"', function() {
        state = convert.calculateNextState(state, "/");
        assert.equal("36", state.display);
     });
     it('Display should be "10"', function() {
        state = convert.calculateNextState(state, "10");
        assert.equal("10", state.display);
     });
     it('Display should be "3.6"', function() {
        state = convert.calculateNextState(state, "=");
        assert.equal("3.6", state.display);
     });
  });
  
});