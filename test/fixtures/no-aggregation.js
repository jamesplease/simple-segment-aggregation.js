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
    segment: [{id: 1}, {id: 2}]
  },
  {
    timestamp: 2,
    segment: [{id: 3}, {id: 4}]
  }
];

fixtures.noAggregation.someOverlap = [
  {
    timestamp: 1,
    segment: [{id: 1}, {id: 2}]
  },
  {
    timestamp: 2,
    segment: [{id: 2}]
  }
];
