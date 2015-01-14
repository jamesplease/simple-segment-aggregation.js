# simple-segment-aggregation.js [![Travis build status](http://img.shields.io/travis/jmeas/consecutive-segments.js.svg?style=flat)](https://travis-ci.org/jmeas/consecutive-segments.js)

Aggregate consecutive segments by their events.

This library is best used with data returned from [time-segments.js](https://github.com/jmeas/time-segments.js)
and [consecutive-segments.js](https://github.com/jmeas/consecutive-segments.js)

### Motivation

Some visualizations aggregate consecutive segments into a single unit. This
library groups any segment with the same content into the same block.

### Concepts

##### Aggregates

An aggregate is an Object with the following properties

- `events` - the events contained within the aggregation
- `duration` - the length of the aggregation
- `start` - a Unix timestamp representing the start of the aggregation
- `end` - a Unix timestamp representing the end of the aggregation
- `continuesForward` - a Boolean representing whether any of the events in this
  aggregate are in the subsequent aggregate
- `continuesBackward` - a Boolean representing whether any of the events in this
  aggregate are in the previous aggregate

### API

This library exposes a single method.

##### `aggregate( group, scale )`

It accepts a group of segments and returns a group of aggregates.

`scale` can be any of the resolutions supported by [moment.js](http://momentjs.com/).
A short list of examples include `days`, `years`, `weeks`. Moment's abbrevations
are also supported, as in `w` for `weeks.` The default scale is `weeks`.
