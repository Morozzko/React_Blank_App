// Быстрая сортировка (Quick Sort)
//
// Суть алгоритма Хоара разделить массив на две части, опорный элемент выбирается из середины, далее
// все элементы меньше опорного, должны попасть в левый массив, а все больше в правый. После того как итерация
// закончена, алгоритм повторно применяется к двум массивам. Продолжается он пока длинна последнего массива
// не будет равна 1

//
// Временная сложность алгоритма быстрой сортировки составляет O(n^2) в худшем случае, но в среднем и лучшем случаях сложность составляет O(n log n).

export const quickSort = (
  inputArray: number[],
  low = 0,
  high = inputArray.length - 1
): number[] => {
  if (low < high) {
    // pivot является разделительным элементом.
    const pivotIndex = partition(inputArray, low, high)

    // Рекурсивно сортируем элементы перед и после разделения
    quickSort(inputArray, low, pivotIndex - 1)
    quickSort(inputArray, pivotIndex + 1, high)
  }

  return inputArray
}

// Функция для разделения массива
const partition = (inputArray: number[], low: number, high: number) => {
  // Выбираем последний элемент в качестве опорного
  const pivot = inputArray[high]
  let i = low - 1

  for (let j = low; j < high; j++) {
    // If current element is smaller or equal to pivot
    if (inputArray[j] <= pivot) {
      i++

      // Swap elements at indices i and j
      const temp = inputArray[i]
      inputArray[i] = inputArray[j]
      inputArray[j] = temp
    }
  }

  // Swap pivot element with element at (i+1)
  const temp = inputArray[i + 1]
  inputArray[i + 1] = inputArray[high]
  inputArray[high] = temp

  // Return the partitioning index
  return i + 1
}
