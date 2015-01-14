var SimpleSegmentAggregation = {

  // Segment an array of events by scale
  group: function(segments, scale) {
    scale = scale || 'weeks';
    var segmentCount = _.keys(segments).length;

    if (!segments || segmentCount === 0) {
      return [];
    }

    // Convert the objects into arrays for comparing
    segments = _.map(segments, function(segment, timestamp) {
      return {
        timestamp: timestamp,
        segment: segment
      };
    });

    var groups = [], currentMoment, prevMoment, push;
    var currentGroup = 0;
    _.each(segments, function(s, index) {

      // Check to see if the current group is the same
      // as the previous group by comparing
      if (index !== 0) {
        currentMoment = moment.unix(s.timestamp).utc();
        prevMoment = moment.unix(segments[index - 1].timestamp).utc();
        if (currentMoment.diff(prevMoment, scale) > 1) {
          currentGroup++;
        }
      }

      // Ensure that the group exists, then push to it
      if (!groups[currentGroup]) {
        groups[currentGroup] = [];
      }
      groups[currentGroup].push(s);
    });

    return groups;
  }
};
