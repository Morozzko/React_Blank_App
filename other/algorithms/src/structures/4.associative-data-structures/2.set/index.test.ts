import { MySet } from './index'

describe('MySet', () => {
  let set: MySet<number>

  beforeEach(() => {
    set = new MySet<number>()
  })

  describe('add', () => {
    it('should add a new value to the set', () => {
      set.add(1)
      set.add(2)

      expect(set.size()).toBe(2)
      expect(set.has(1)).toBe(true)
      expect(set.has(2)).toBe(true)
    })

    it('should not add a duplicate value to the set', () => {
      set.add(1)
      set.add(1)

      expect(set.size()).toBe(1)
    })
  })

  describe('has', () => {
    it('should return true if the value is in the set', () => {
      set.add(1)
      set.add(2)

      expect(set.has(1)).toBe(true)
      expect(set.has(2)).toBe(true)
    })

    it('should return false if the value is not in the set', () => {
      expect(set.has(1)).toBe(false)
      expect(set.has(2)).toBe(false)
    })
  })

  describe('delete', () => {
    it('should remove the value from the set and return true', () => {
      set.add(1)
      expect(set.delete(1)).toBe(true)
      expect(set.has(1)).toBe(false)
    })

    it('should return false if the value is not in the set', () => {
      expect(set.delete(1)).toBe(false)
    })
  })

  describe('size', () => {
    it('should return the number of values in the set', () => {
      set.add(1)
      set.add(2)

      expect(set.size()).toBe(2)
    })

    it('should return 0 for an empty set', () => {
      expect(set.size()).toBe(0)
    })
  })

  describe('clear', () => {
    it('should remove all values from the set', () => {
      set.add(1)
      set.add(2)
      set.clear()

      expect(set.size()).toBe(0)
      expect(set.has(1)).toBe(false)
      expect(set.has(2)).toBe(false)
    })
  })
})
