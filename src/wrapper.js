(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['underscore'], factory);
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    module.exports = factory(_);
  } else {
    root.<%= exportVarName %> = factory(root._);
  }
})(this, function(_) {
  'use strict';

  // @include ./simple-segment-aggregation.js
  
  return <%= exportVarName %>;
});
