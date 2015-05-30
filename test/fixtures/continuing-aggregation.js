//
// Continuing Aggregations
//

var fixtures = fixtures || {};

fixtures.continuingAggregation = {};

var module = module || {};
if (module.exports) { module.exports = fixtures.continuingAggregation; }

var eventOne = {
  id: 5,
  projectId: 1,
  verified: true
};

var eventTwo = {
  id: 6,
  projectId: 1,
  verified: true
};

fixtures.continuingAggregation.simple = [
  {
    timestamp: 1,
    events: [eventOne]
  },
  {
    timestamp: 2,
    events: [eventTwo]
  }
];