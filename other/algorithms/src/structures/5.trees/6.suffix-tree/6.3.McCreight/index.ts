class SuffixNode {
  start: number
  end: number
  children: Map<string, SuffixNode>
  suffixLink: SuffixNode | null

  constructor(start: number, end: number) {
    this.start = start
    this.end = end
    this.children = new Map()
    this.suffixLink = null
  }
}

class McCreightSuffixTree {
  private text: string
  private root: SuffixNode
  private j: number

  constructor(text: string) {
    this.text = text
    this.root = new SuffixNode(-1, -1)
    this.j = 0
    this.build()
  }

  private build(): void {
    let currentNode = this.root

    for (let i = 0; i < this.text.length; i++) {
      while (this.j <= i) {
        currentNode = this.update(currentNode, i)
        this.j++
      }
    }
  }

  private update(node: SuffixNode, i: number): SuffixNode {
    const oldNode = this.root
    const [newNode, newLeaf] = this.testAndSplit(node, i - 1)

    while (!newLeaf) {
      newNode.children.set(
        this.text[i],
        new SuffixNode(i, this.text.length - 1)
      )

      if (oldNode !== this.root) {
        oldNode.suffixLink = newNode
      }

      oldNode = newNode
      node = this.canonize(node.suffixLink, i - 1)
      const [nextNode, isLeaf] = this.testAndSplit(node, i - 1)
      newNode = nextNode
      newLeaf = isLeaf
    }

    if (oldNode !== this.root) {
      oldNode.suffixLink = node
    }

    return node
  }

  private testAndSplit(node: SuffixNode, i: number): [SuffixNode, boolean] {
    if (this.j <= i) {
      const edge = this.text[node.start + i - this.j]
      const nextNode = node.children.get(edge)

      if (nextNode) {
        if (this.text[this.j] === this.text[nextNode.start]) {
          return [node, false]
        }

        const splitNode = new SuffixNode(
          nextNode.start,
          nextNode.start + i - this.j
        )
        node.children.set(edge, splitNode)
        splitNode.children.set(
          this.text[this.j],
          new SuffixNode(this.j, this.text.length - 1)
        )
        nextNode.start += i - this.j
        splitNode.children.set(this.text[nextNode.start], nextNode)

        return [splitNode, true]
      }
    }

    return [node, true]
  }

  private canonize(node: SuffixNode, i: number): SuffixNode {
    if (i < this.j) {
      const edge = this.text[this.j - 1]
      let nextNode = node.children.get(edge)

      while (nextNode && i - this.j + 1 >= nextNode.end - nextNode.start) {
        this.j = this.j + nextNode.end - nextNode.start + 1
        node = nextNode
        if (this.j <= i) {
          const nextEdge = this.text[this.j - 1]
          nextNode = node.children.get(nextEdge)
        }
      }
    }

    return node
  }
}
