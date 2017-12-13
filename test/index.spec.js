import { expect } from 'chai';

describe('lib', function() {
  describe('func', function() {
    it('should sort keys in ascending order when order = "asc".', () => {
      let input = { a: 1, c: 3, d: 4, b: 2 };
      let sortedOutput = { a: 1, b: 2, c: 3, d: 4 };

      expect(getDeepKeys(sortKeys(input, sortOrder.ASC))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });
  });
});
