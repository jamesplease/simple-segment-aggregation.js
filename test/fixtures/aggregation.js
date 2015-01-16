//
// Aggregations
//

var fixtures = fixtures || {};

fixtures.aggregation = {};

var module = module || {};
if (module.exports) { module.exports = fixtures.aggregation; }

fixtures.aggregation.twoSegments = [
  {
    timestamp: 1,
    segment: [{id: 1}, {id: 2}]
  },
  {
    timestamp: 2,
    segment: [{id: 1}, {id: 2}]
  }
];

fixtures.aggregation.mixed = [
  {
    timestamp: 1,
    segment: [{id: 1}, {id: 2}]
  },
  {
    timestamp: 2,
    segment: [{id: 1}, {id: 2}]
  },
  {
    timestamp: 3,
    segment: [{id: 2}]
  },
  {
    timestamp: 4,
    segment: [{id: 3}, {id: 4}]
  },
  {
    timestamp: 5,
    segment: [{id: 3}, {id: 4}, {id: 5}]
  }
];
