//
// Segments
//

var fixtures = fixtures || {};

var module = module || {};
if (module.exports) { module.exports = fixtures; }

//
//  1    2    3    
//  x         x
//

fixtures.disconnected = {
  1: 'one',
  3: 'three'
};

//
//  1    2 
//  x    x
//

fixtures.connected = {
  1: 'one',
  2: 'two'
};

//
//  1    2    3   4    
//  x    x        x
//

fixtures.mixed = {
  1: 'one',
  2: 'two',
  4: 'four'
};

