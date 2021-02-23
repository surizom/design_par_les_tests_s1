const point = require('../src/point')
const { expect } = require('./test-helper')


describe('Point', () => {
  describe('happy path', () => {
    it('should be like I want it', () => {
      // ARRANGE
      const point1 = { x: 0, y: 0 }
      const point2 = { x: 0, y: 0 }

      // ACT
      const result = point.distance(point1, point2)

      // ASSERT
      expect(result).to.equal(0)
    })
  })
})
