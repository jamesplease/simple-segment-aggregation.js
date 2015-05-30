describe('Continuing aggregation', function() {
  describe('Simple', function() {
    beforeEach(function() {
      this.fixtures = fixtures.continuingAggregation.simple;
      this.aggregates = SimpleSegmentAggregation.aggregate(this.fixtures, 'seconds');
    });

    it('should return a single aggregation', function() {
      expect(this.aggregates).to.have.length(1);
    });

    it('should start at 1', function() {
      expect(this.aggregates[0].start).to.equal(1);
    });

    it('should have duration of 2', function() {
      expect(this.aggregates[0].duration).to.equal(2);
    });

    it('should not extend forward', function() {
      expect(this.aggregates[0].continuesForward).to.be.false;
    });

    it('should not extend backward', function() {
      expect(this.aggregates[0].continuesBackward).to.be.false;
    });
  });
});