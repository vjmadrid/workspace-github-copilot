function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

function explainQuickSort(arr) {
  if (arr.length <= 1) {
    return {
      sortedArray: arr,
      explanation: `El arreglo tiene ${arr.length} elemento(s), por lo que ya está ordenado: [${arr.join(', ')}]`
    };
  }

// Ejemplo de uso
const unsortedArray = [5, 2, 8, 1, 9, 4, 7, 3, 6];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);