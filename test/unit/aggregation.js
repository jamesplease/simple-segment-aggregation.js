describe('Aggregation', function() {
  describe('Two segments', function() {
    beforeEach(function() {
      this.fixtures = fixtures.aggregation.twoSegments;
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

    it('should have the same events as in both segments', function() {
      expect(this.aggregates[0].events).to.deep.equal(this.fixtures[0].events);
      expect(this.aggregates[0].events).to.deep.equal(this.fixtures[1].events);
    });

    it('should not extend forward', function() {
      expect(this.aggregates[0].continuesForward).to.be.false;
    });

    it('should not extend backward', function() {
      expect(this.aggregates[0].continuesBackward).to.be.false;
    });
  });

  describe('Mixed', function() {
    beforeEach(function() {
      this.fixtures = fixtures.aggregation.mixed;
      this.aggregates = SimpleSegmentAggregation.aggregate(this.fixtures, 'seconds');
    });

    it('should return 4 aggregations', function() {
      expect(this.aggregates).to.have.length(4);
    });

    it('first aggregation: should have the right properties', function() {
      expect(this.aggregates[0].duration).to.equal(2);
      expect(this.aggregates[0].start).to.equal(1);
      expect(this.aggregates[0].events).to.deep.equal(this.fixtures[0].events);
      expect(this.aggregates[0].continuesBackward).to.be.false;
      expect(this.aggregates[0].continuesForward).to.be.true;
    });

    it('second aggregation: should have the right properties', function() {
      expect(this.aggregates[1].duration).to.equal(1);
      expect(this.aggregates[1].start).to.equal(3);
      expect(this.aggregates[1].events).to.deep.equal(this.fixtures[2].events);
      expect(this.aggregates[1].continuesBackward).to.be.true;
      expect(this.aggregates[1].continuesForward).to.be.false;
    });

    it('third aggregation: should have the right properties', function() {
      expect(this.aggregates[2].duration).to.equal(1);
      expect(this.aggregates[2].start).to.equal(4);
      expect(this.aggregates[2].events).to.deep.equal(this.fixtures[3].events);
      expect(this.aggregates[2].continuesBackward).to.be.false;
      expect(this.aggregates[2].continuesForward).to.be.true;
    });

    it('fourth aggregation: should have the right properties', function() {
      expect(this.aggregates[3].duration).to.equal(1);
      expect(this.aggregates[3].start).to.equal(5);
      expect(this.aggregates[3].events).to.deep.equal(this.fixtures[4].events);
      expect(this.aggregates[3].continuesBackward).to.be.true;
      expect(this.aggregates[3].continuesForward).to.be.false;
    });
  });
});
