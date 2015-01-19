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
    events: [{id: 1}, {id: 2}]
  },
  {
    timestamp: 2,
    events: [{id: 1}, {id: 2}]
  }
];

fixtures.aggregation.mixed = [
  {
    timestamp: 1,
    events: [{id: 1}, {id: 2}]
  },
  {
    timestamp: 2,
    events: [{id: 1}, {id: 2}]
  },
  {
    timestamp: 3,
    events: [{id: 2}]
  },
  {
    timestamp: 4,
    events: [{id: 3}, {id: 4}]
  },
  {
    timestamp: 5,
    events: [{id: 3}, {id: 4}, {id: 5}]
  }
];
