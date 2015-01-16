describe('when the group has a single segment', function() {
  beforeEach(function() {
    this.result = SimpleSegmentAggregation.aggregate(fixtures.oneSegment, 'seconds');
  });

  it('should return a single aggregate', function() {
    expect(this.result).to.have.length(1);
  });

  it('should return an aggregate that starts at the same time as that segment', function() {
    expect(this.result[0].start).to.equal(1);
  });

  it('should return an aggregate with a duration of 1', function() {
    expect(this.result[0].duration).to.equal(1);
  });

  it('should return an aggregate that does not continue forward', function() {
    expect(this.result[0].continuesForward).to.be.false;
  });

  it('should return an aggregate that does not continue backward', function() {
    expect(this.result[0].continuesBackward).to.be.false;
  });

  it('should return an aggregate with the same events as the segment', function() {
    expect(this.result[0].events).to.deep.equal(fixtures.oneSegment[0].segment);
  });
});
