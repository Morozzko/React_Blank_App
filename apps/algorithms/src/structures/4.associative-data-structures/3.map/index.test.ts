import { MyMap } from './index'

describe('MyMap', () => {
	let map: MyMap<string, number>

	beforeEach(() => {
		map = new MyMap<string, number>()
	})

	describe('set', () => {
		it('should add a key-value pair to the map', () => {
			map.set('foo', 1)

			expect(map.size()).toBe(1)
			expect(map.get('foo')).toBe(1)
		})

		it('should overwrite an existing key-value pair', () => {
			map.set('foo', 1)
			map.set('foo', 2)

			expect(map.size()).toBe(1)
			expect(map.get('foo')).toBe(2)
		})
	})

	describe('get', () => {
		it('should return the value associated with a key', () => {
			map.set('foo', 1)

			expect(map.get('foo')).toBe(1)
		})

		it('should return undefined if the key is not in the map', () => {
			expect(map.get('foo')).toBeUndefined()
		})
	})

	describe('has', () => {
		it('should return true if the map has a key', () => {
			map.set('foo', 1)

			expect(map.has('foo')).toBe(true)
		})

		it('should return false if the map does not have a key', () => {
			expect(map.has('foo')).toBe(false)
		})
	})

	describe('delete', () => {
		it('should remove a key-value pair from the map', () => {
			map.set('foo', 1)
			map.delete('foo')

			expect(map.size()).toBe(0)
			expect(map.has('foo')).toBe(false)
		})

		it('should return true if the key-value pair is removed', () => {
			map.set('foo', 1)

			expect(map.delete('foo')).toBe(true)
		})

		it('should return false if the key is not in the map', () => {
			expect(map.delete('foo')).toBe(false)
		})
	})

	describe('size', () => {
		it('should return the number of key-value pairs in the map', () => {
			expect(map.size()).toBe(0)

			map.set('foo', 1)
			expect(map.size()).toBe(1)

			map.set('bar', 2)
			expect(map.size()).toBe(2)
		})
	})

	describe('clear', () => {
		it('should remove all key-value pairs from the map', () => {
			map.set('foo', 1)
			map.set('bar', 2)

			map.clear()

			expect(map.size()).toBe(0)
			expect(map.has('foo')).toBe(false)
			expect(map.has('bar')).toBe(false)
		})
	})
})
