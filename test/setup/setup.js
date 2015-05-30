module.exports = function() {
  global.expect = global.chai.expect;

  global.fixtures = {};
  global.fixtures.conflictAggregation = require('../fixtures/conflict-aggregation');
  global.fixtures.continuingAggregation = require('../fixtures/continuing-aggregation');
  global.fixtures.noAggregation = require('../fixtures/no-aggregation');
  global.fixtures.oneSegment = require('../fixtures/one-segment');
  global.fixtures.options = require('../fixtures/options');

  beforeEach(function() {
    this.sandbox = global.sinon.sandbox.create();
    global.stub = this.sandbox.stub.bind(this.sandbox);
    global.spy  = this.sandbox.spy.bind(this.sandbox);
  });

  afterEach(function() {
    delete global.stub;
    delete global.spy;
    this.sandbox.restore();
  });
}
