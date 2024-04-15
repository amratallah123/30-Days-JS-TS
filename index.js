function buildMaxHeap(array) {
  // Start from the last non-leaf node and heapify down
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapifyDown(array, i, array.length);
  }
  return array;
}
function heapifyUp(array, element) {
  array.push(element);
  for (let index = array.length - 1; index >= 0; index / 2) {
    if (array[index] > array[index / 2]) swap(arr, index, index / 2);
  }
}
function heapifyDown(array, index, heapSize) {
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

var x = buildMaxHeap([10, 20, 15, 30, 40]);
var arr = [];
arr.push(x[0]);

x = buildMaxHeap(x.slice(1));
arr.push(x[0]);
x = buildMaxHeap(x.slice(1));
arr.push(x[0]);
x = buildMaxHeap(x.slice(1));
arr.push(x[0]);
x = buildMaxHeap(x.slice(1));
arr.push(x[0]);

console.log(arr);
