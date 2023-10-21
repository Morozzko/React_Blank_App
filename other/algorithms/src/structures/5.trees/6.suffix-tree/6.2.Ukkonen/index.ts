// Алгоритм Укконена - это эффективный алгоритм для построения суффиксных деревьев, который работает за линейное время
// O(n) от длины строки.
class SuffixTreeNode {
  children: Map<string, SuffixTreeNode> = new Map<string, SuffixTreeNode>()
  start: number
  end: number
  suffixLink: SuffixTreeNode | null = null

  constructor(start: number, end: number) {
    this.start = start
    this.end = end
  }

  length(): number {
    return this.end - this.start
  }
}

class ActivePoint {
  node: SuffixTreeNode
  edge = ''
  length = 0

  constructor(node: SuffixTreeNode) {
    this.node = node
  }
}

class SuffixTree {
  root: SuffixTreeNode
  active: ActivePoint
  remaining = 0
  end = -1
  text: string

  constructor(text: string) {
    this.text = text
    this.root = new SuffixTreeNode(0, 0)
    this.active = new ActivePoint(this.root)

    for (let i = 0; i < text.length; i++) {
      this.addChar(i)
    }
  }

  private addChar(i: number): void {
    this.end++
    this.remaining++

    let lastInternalNode: SuffixTreeNode | null = null

    while (this.remaining > 0) {
      if (this.active.length === 0) {
        this.active.edge = this.text[i]
      }

      if (!this.active.node.children.has(this.active.edge)) {
        const newNode = new SuffixTreeNode(i, Infinity)
        this.active.node.children.set(this.active.edge, newNode)

        if (lastInternalNode !== null) {
          lastInternalNode.suffixLink = this.active.node
          lastInternalNode = null
        }
      } else {
        const nextNode = this.active.node.children.get(this.active.edge)!

        if (this.walkDown(nextNode)) {
          continue
        }

        if (this.text[nextNode.start + this.active.length] === this.text[i]) {
          if (lastInternalNode !== null) {
            lastInternalNode.suffixLink = this.active.node
          }

          this.active.length++
          break
        }

        const splitEnd = nextNode.start + this.active.length - 1
        const splitNode = new SuffixTreeNode(nextNode.start, splitEnd)
        this.active.node.children.set(this.active.edge, splitNode)
        const leafNode = new SuffixTreeNode(i, Infinity)
        splitNode.children.set(this.text[i], leafNode)
        nextNode.start += this.active.length
        splitNode.children.set(this.text[nextNode.start], nextNode)

        if (lastInternalNode !== null) {
          lastInternalNode.suffixLink = splitNode
        }

        lastInternalNode = splitNode
      }

      this.remaining--

      if (this.active.node === this.root && this.active.length > 0) {
        this.active.length--
        this.active.edge = this.text[i - this.remaining + 1]
      } else {
        this.active.node = this.active.node.suffixLink || this.root
      }
    }
  }

  private walkDown(node: SuffixTreeNode): boolean {
    const edgeLength = node.length()

    if (this.active.length >= edgeLength) {
      this.active.edge = this.text[node.start + edgeLength]
      this.active.length -= edgeLength
      this.active.node = node

      return true
    }

    return false
  }
}
