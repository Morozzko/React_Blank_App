// Суффиксное дерево - это структура данных, которая представляет собой сжатое префиксное дерево,
// содержащее все суффиксы строки. Оно используется для решения различных задач, связанных со строками.
// Суффиксное дерево имеет более сложную структуру и алгоритмы построения, чем простое префиксное дерево (trie).

class SuffixTreeNode {
  children: Map<string, SuffixTreeNode> = new Map<string, SuffixTreeNode>()
  suffixLink: SuffixTreeNode | null = null
}

export class SuffixTree {
  root: SuffixTreeNode
  activeNode: SuffixTreeNode
  activeEdge = ''
  activeLength = 0
  remaining = 0

  constructor(private s: string) {
    this.root = new SuffixTreeNode()
    this.activeNode = this.root

    for (let i = 0; i < s.length; i++) {
      this.addChar(i)
    }
  }

  private addChar(i: number): void {
    this.remaining++

    while (this.remaining > 0) {
      if (this.activeLength === 0) {
        this.activeEdge = this.s[i]
      }

      if (!this.activeNode.children.has(this.activeEdge)) {
        const newNode = new SuffixTreeNode()
        this.activeNode.children.set(this.activeEdge, newNode)

        if (this.activeNode !== this.root) {
          this.activeNode = this.activeNode.suffixLink!
        }

        this.remaining--
      } else {
        const nextNode = this.activeNode.children.get(this.activeEdge)!
        const edgeLength = nextNode.suffixLink ? 1 : i - this.remaining + 1

        if (this.activeLength >= edgeLength) {
          this.activeEdge = this.s[i - this.remaining + edgeLength]
          this.activeLength -= edgeLength
          this.activeNode = nextNode
          continue
        }

        if (this.s[i] === this.s[i - this.activeLength]) {
          this.activeLength++
          break
        }

        const splitNode = new SuffixTreeNode()
        this.activeNode.children.set(this.activeEdge, splitNode)
        const leafNode = new SuffixTreeNode()
        splitNode.children.set(this.s[i], leafNode)
        nextNode.suffixLink = splitNode
        splitNode.children.set(this.s[i - this.activeLength], nextNode)

        if (this.activeNode !== this.root) {
          this.activeNode = this.activeNode.suffixLink!
        }

        this.remaining--
      }

      if (this.activeNode === this.root && this.activeLength > 0) {
        this.activeLength--
        this.activeEdge = this.s[i - this.remaining + 1]
      }
    }
  }
}
