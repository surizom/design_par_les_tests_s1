const point = require('../src/point')
const { expect } = require('./test-helper')


describe('Point', () => {
  describe('happy path', () => {
    it('should return 0 distance between origin point and itself', () => {
      // ARRANGE
      const point1 = { x: 0, y: 0 }
      const point2 = { x: 0, y: 0 }

      // ACT
      const result = point.distance(point1, point2)

      // ASSERT
      expect(result).to.equal(0)
    })
    it('should return distance between origin point and point on y axis', () => {
      // ARRANGE
      const point1 = { x: 0, y: 0 }
      const point2 = { x: 12, y: 0 }

      // ACT
      const result = point.distance(point1, point2)

      // ASSERT
      expect(result).to.equal(12)
    })
    it('should return distance between origin point and point on x axis', () => {
      // ARRANGE
      const point1 = { x: 0, y: 19 }
      const point2 = { x: 0, y: 0 }

      // ACT
      const result = point.distance(point1, point2)

      // ASSERT
      expect(result).to.equal(19)
    })
    it('should return distance between origin point and point on x axis', () => {
      // ARRANGE
      const point1 = { x: 12, y: 1 }
      const point2 = { x: -2, y: 90 }

      // ACT
      const result = point.distance(point1, point2)

      // ASSERT
      expect(result).to.equal(Math.sqrt(8117))
    })
  })
})
