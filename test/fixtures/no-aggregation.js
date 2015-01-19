//
// No aggregations
//

var fixtures = fixtures || {};

fixtures.noAggregation = {};

var module = module || {};
if (module.exports) { module.exports = fixtures.noAggregation; }

fixtures.noAggregation.noOverlap = [
  {
    timestamp: 1,
    events: [{id: 1}, {id: 2}]
  },
  {
    timestamp: 2,
    events: [{id: 3}, {id: 4}]
  }
];

fixtures.noAggregation.someOverlap = [
  {
    timestamp: 1,
    events: [{id: 1}, {id: 2}]
  },
  {
    timestamp: 2,
    events: [{id: 2}]
  }
];
