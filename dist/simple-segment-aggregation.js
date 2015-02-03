(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("underscore")) : typeof define === "function" && define.amd ? define(["underscore"], factory) : global.SimpleSegmentAggregation = factory(global._);
})(this, function (_) {
  "use strict";

  var SimpleSegmentAggregation = {

    // Segment an array of events by scale
    aggregate: function aggregate(group, scale, options) {
      scale = scale || "weeks";
      options = options || {};
      _.defaults(options, {
        idAttribute: "id"
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
          continuesBackward;

      _.each(group, function (g, index) {
        currentIds = _.pluck(g.events, options.idAttribute);
        continuesBackward = false;

        if (index) {
          // Whether the contents have the same length
          sameLength = currentIds.length === prevIds.length;
          intersect = _.intersection(currentIds, prevIds);
          // Whether the events in the current list are all contained within the last
          allEvents = intersect.length === currentIds.length;

          // This means that they occupy the same aggregate
          if (sameLength && allEvents) {
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

        // The algorithm is pessimistic. Assume that the
        // block does not extend forward. Subsequent
        // iterations disprove, and modify, the assumption
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

  var simple_segment_aggregation = SimpleSegmentAggregation;

  return simple_segment_aggregation;
});
//# sourceMappingURL=./simple-segment-aggregation.js.map