// Префиксное дерево (Trie) — это структура данных, используемая для эффективного хранения и поиска строк
// с общими префиксами. В префиксном дереве каждый узел представляет собой символ строки,
// а каждый путь от корня до конечного узла представляет отдельную строку.
// Каждый узел может иметь ноль или более дочерних узлов, соответствующих следующим символам строк.
//
// Префиксные деревья часто используются для решения задач автодополнения, поиска подстроки и других задач,
// связанных с обработкой строк и поиском с общими префиксами.
// Сложность алгоритма в префиксном дереве:
//
// Вставка: O(m), где m — длина вставляемой строки. Время вставки зависит только от длины строки,
// а не от количества строк в дереве.
// Поиск: O(m), где m — длина искомой строки. Время поиска также зависит только от длины строки,
// а не от количества строк в дереве.
// Поиск слов, начинающихся с заданного префикса: O(p + n), где p — длина префикса,
// а n — количество найденных строк, начинающихся с заданного префикса.
// Время зависит от длины префикса и количества найденных слов.
class TrieNode {
  children: Map<string, TrieNode>
  isEndOfWord: boolean

  constructor() {
    this.children = new Map<string, TrieNode>()
    this.isEndOfWord = false
  }
}

export class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let currentNode = this.root
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode())
      }
      currentNode = currentNode.children.get(char)!
    }
    currentNode.isEndOfWord = true
  }

  search(word: string): boolean {
    let currentNode = this.root
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return false
      }
      currentNode = currentNode.children.get(char)!
    }

    return currentNode.isEndOfWord
  }

  startsWith(prefix: string): boolean {
    let currentNode = this.root
    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return false
      }
      currentNode = currentNode.children.get(char)!
    }

    return true
  }
}
