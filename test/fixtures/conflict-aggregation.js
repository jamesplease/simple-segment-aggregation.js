//
// Conflict Aggregations
//

var fixtures = fixtures || {};

fixtures.conflictAggregation = {};

var module = module || {};
if (module.exports) { module.exports = fixtures.conflictAggregation; }

fixtures.conflictAggregation.twoSegments = [
  {
    timestamp: 1,
    events: [{id: 1}, {id: 2}]
  },
  {
    timestamp: 2,
    events: [{id: 1}, {id: 2}]
  }
];

fixtures.conflictAggregation.mixed = [
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
