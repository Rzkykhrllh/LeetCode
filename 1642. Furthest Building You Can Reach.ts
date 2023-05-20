class MaxHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  private parent(index: number): number {
    return this.heap[this.getParentIndex(index)];
  }

  private leftChild(index: number): number {
    return this.heap[this.getLeftChildIndex(index)];
  }

  private rightChild(index: number): number {
    return this.heap[this.getRightChildIndex(index)];
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  private heapifyDown(): void {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let maxChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        maxChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] >= this.heap[maxChildIndex]) {
        break;
      }

      this.swap(index, maxChildIndex);
      index = maxChildIndex;
    }
  }

  public insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  public extractMax(): number | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return max;
  }

  public peekMax(): number | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }
    return this.heap[0];
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

function furthestBuilding(
  heights: number[],
  bricks: number,
  ladders: number
): number {
  console.log(heights.length);

  const queue = new MaxHeap();
  var currentHeight = heights[0];

  for (var i = 1; i < heights.length; i++) {
    var diff = heights[i] - currentHeight;
    currentHeight = heights[i];

    if (diff > 0) {
      queue.insert(diff);
      bricks -= diff;
    } else {
      continue;
    }

    if (bricks < 0) {
      let top = queue.extractMax();
      bricks += top;

      if (ladders > 0) ladders -= 1;
      else return i - 1;
    }
  }

  console.log("here");
  return heights.length - 1;
}
