# simple-segment-aggregation.js
[![Travis build status](http://img.shields.io/travis/jmeas/simple-segment-aggregation.js.svg?style=flat)](https://travis-ci.org/jmeas/simple-segment-aggregation.js)
[![Dependency Status](https://david-dm.org/jmeas/simple-segment-aggregation.js.svg)](https://david-dm.org/jmeas/simple-segment-aggregation.js) 
[![devDependency Status](https://david-dm.org/jmeas/simple-segment-aggregation.js/dev-status.svg)](https://david-dm.org/jmeas/simple-segment-aggregation.js#info=devDependencies)

Aggregate consecutive segments by their events.

This library is best used with data returned from [time-segments.js](https://github.com/jmeas/time-segments.js)
and [simple-segment-aggregation.js](https://github.com/jmeas/simple-segment-aggregation.js)

### Motivation

Some visualizations aggregate consecutive segments into a single unit. This
library groups any segment with the same content into the same block.

### Caveats

This library requires that each of your `events` have a unique identifier.

### Concepts

##### Aggregates

An aggregate is an Object with the following properties

- `events` - the events contained within the aggregation
- `start` - a Unix timestamp representing the start of the aggregation
- `duration` - the length of the aggregation
- `continuesForward` - a Boolean representing whether any of the events in this
  aggregate are in the subsequent aggregate
- `continuesBackward` - a Boolean representing whether any of the events in this
  aggregate are in the previous aggregate

### API

This library exposes a single method.

##### `aggregate( group [, options] )`

It accepts a group of segments and returns a group of aggregates. The number of
aggregates you get could be the same number of segments that you pass in, or less, but
never more.

Options can be used to customize the behavior of the API. The available options are:

- `idAttribute` - The key containing the Event's unique identifier
