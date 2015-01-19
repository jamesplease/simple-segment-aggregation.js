describe('No aggregation', function() {
  describe('No overlap', function() {
    beforeEach(function() {
      this.data = fixtures.noAggregation.noOverlap;
      this.result = SimpleSegmentAggregation.aggregate(this.data, 'seconds');
    });

    it('should return two aggregations', function() {
      expect(this.result).to.have.length(2);
    });

    it('first aggregation: starts at 1', function() {
      expect(this.result[0].start).to.equal(1);
    });

    it('first aggregation: duration of 1', function() {
      expect(this.result[0].duration).to.equal(1);
    });

    it('first aggregation: does not continue forward', function() {
      expect(this.result[0].continuesForward).to.be.false;
    });

    it('first aggregation: does not continue back', function() {
      expect(this.result[0].continuesBackward).to.be.false;
    });

    it('first aggregation: contains the events from the first segment', function() {
      expect(this.result[0].events).to.deep.equal(this.data[0].events);
    });

    it('second aggregation: starts at 2', function() {
      expect(this.result[1].start).to.equal(2);
    });

    it('second aggregation: duration of 1', function() {
      expect(this.result[1].duration).to.equal(1);
    });

    it('second aggregation: does not continue forward', function() {
      expect(this.result[1].continuesForward).to.be.false;
    });

    it('second aggregation: does not continue back', function() {
      expect(this.result[1].continuesBackward).to.be.false;
    });

    it('second aggregation: contains the events from the first segment', function() {
      expect(this.result[1].events).to.deep.equal(this.data[1].events);
    });
  });

  describe('some overlap', function() {
    beforeEach(function() {
      this.data = fixtures.noAggregation.someOverlap;
      this.result = SimpleSegmentAggregation.aggregate(this.data, 'seconds');
    });

    it('should return two aggregations', function() {
      expect(this.result).to.have.length(2);
    });

    it('first aggregation: starts at 1', function() {
      expect(this.result[0].start).to.equal(1);
    });

    it('first aggregation: duration of 1', function() {
      expect(this.result[0].duration).to.equal(1);
    });

    it('first aggregation: continues forward', function() {
      expect(this.result[0].continuesForward).to.be.true;
    });

    it('first aggregation: does not continue back', function() {
      expect(this.result[0].continuesBackward).to.be.false;
    });

    it('first aggregation: contains the events from the first segment', function() {
      expect(this.result[0].events).to.deep.equal(this.data[0].events);
    });

    it('second aggregation: starts at 2', function() {
      expect(this.result[1].start).to.equal(2);
    });

    it('second aggregation: duration of 1', function() {
      expect(this.result[1].duration).to.equal(1);
    });

    it('second aggregation: does not continue forward', function() {
      expect(this.result[1].continuesForward).to.be.false;
    });

    it('second aggregation: continues back', function() {
      expect(this.result[1].continuesBackward).to.be.true;
    });

    it('second aggregation: contains the events from the first segment', function() {
      expect(this.result[1].events).to.deep.equal(this.data[1].events);
    });
  });
});
