import _ from 'underscore';

// Two events are considered to be of the same type
// when everything about them matches aside from their ID
function sameEventTypes(eventsOne, eventsTwo, idProp) {
  eventsOne = _.map(eventsOne, e => _.omit(e, idProp));
  eventsTwo = _.map(eventsTwo, e => _.omit(e, idProp));

  return _.isEqual(eventsOne, eventsTwo);
}

var SimpleSegmentAggregation = {

  // Segment an array of events by scale
  aggregate(group, scale, options) {
    scale = scale || 'weeks';
    options = options || {};
    _.defaults(options, {
      idAttribute: 'id'
    });

    var aggregates = [];

    if (!group || !group.length) {
      return aggregates;
    }

    var prevIds,
      currentIds,
      i = 0,
      intersect,
      sameLength,
      allEvents,
      sameEventType,
      continuesBackward;

    _.each(group, (g, index) => {
      currentIds = _.pluck(g.events, options.idAttribute);
      continuesBackward = false;

      if (index) {
        // Whether the contents have the same length
        sameLength = currentIds.length === prevIds.length;
        intersect = _.intersection(currentIds, prevIds);

        // Whether the events in the current list are exactly the same as the last
        allEvents = intersect.length === currentIds.length;
        sameEventType = sameEventTypes(g.events, group[index - 1].events, options.idAttribute);

        // This means that they occupy the same aggregate
        if (sameLength && (allEvents || sameEventType)) {
          aggregates[i].duration++;
        }

        // Otherwise, we need to make a new aggregate
        else {
          i++;
          if (intersect.length) {
            aggregates[i - 1].continuesForward = true;
            continuesBackward = true;
          }
        }
      }
      
      // The algorithm is pessimistic. Assume that
      // `continuesForward` is false. Subsequent
      // iterations disprove (and modify) the assumption
      if (!aggregates[i]) {
        aggregates[i] = {
          events: _.clone(g.events),
          start: +g.timestamp,
          duration: 1,
          continuesForward: false,
          continuesBackward: continuesBackward
        };
      }

      prevIds = currentIds;
    });

    return aggregates;
  }
};

export default SimpleSegmentAggregation;
