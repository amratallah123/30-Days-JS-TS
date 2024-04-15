function buildMaxHeap(array: number[]) {
  // Start from the last non-leaf node and heapify down
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapifyDown(array, i, array.length);
  }
}

function heapifyDown(array: number[], index, heapSize) {
  const leftChildIndex = 2 * index + 1;
  const rightChildIndex = 2 * index + 2;
  let largestIndex = index;

  if (
    leftChildIndex < heapSize &&
    array[leftChildIndex] > array[largestIndex]
  ) {
    largestIndex = leftChildIndex;
  }

  if (
    rightChildIndex < heapSize &&
    array[rightChildIndex] > array[largestIndex]
  ) {
    largestIndex = rightChildIndex;
  }

  if (largestIndex !== index) {
    swap(array, index, largestIndex);
    heapifyDown(array, largestIndex, heapSize);
  }
}

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
