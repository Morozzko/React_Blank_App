import { Trie } from './index'

describe('Trie', () => {
	let trie: Trie

	beforeEach(() => {
		trie = new Trie()
	})

	it('should insert a word into the trie', () => {
		trie.insert('apple')
		expect(trie.search('apple')).toBe(true)
	})

	it('should not find a non-existent word', () => {
		trie.insert('apple')
		expect(trie.search('app')).toBe(false)
	})

	it('should find a word that starts with a prefix', () => {
		trie.insert('apple')
		expect(trie.startsWith('app')).toBe(true)
	})

	it('should not find a prefix that does not exist', () => {
		trie.insert('apple')
		expect(trie.startsWith('b')).toBe(false)
	})

	it('should handle multiple word insertions', () => {
		trie.insert('apple')
		trie.insert('banana')
		trie.insert('grape')

		expect(trie.search('apple')).toBe(true)
		expect(trie.search('banana')).toBe(true)
		expect(trie.search('grape')).toBe(true)
		expect(trie.search('orange')).toBe(false)
	})

	it('should handle overlapping words', () => {
		trie.insert('apple')
		trie.insert('app')

		expect(trie.search('apple')).toBe(true)
		expect(trie.search('app')).toBe(true)
	})

	it('should handle words with a common prefix', () => {
		trie.insert('apple')
		trie.insert('application')
		trie.insert('banana')

		expect(trie.startsWith('app')).toBe(true)
		expect(trie.startsWith('ban')).toBe(true)
	})
})
