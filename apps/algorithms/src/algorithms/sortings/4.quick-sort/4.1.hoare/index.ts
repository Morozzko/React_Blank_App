// Быстрая сортировка (Quick Sort)
//
// Суть алгоритма Хоара разделить массив на две части, опорный элемент выбирается из середины, далее
// все элементы меньше опорного, должны попасть в левый массив, а все больше в правый. После того как итерация
// закончена, алгоритм повторно применяется к двум массивам. Продолжается он пока длинна последнего массива
// не будет равна 1

//
// Временная сложность алгоритма быстрой сортировки составляет O(n^2) в худшем случае, но в среднем и лучшем случаях сложность составляет O(n log n).

// Функция для разделения массива
const partitionHoare = (arr: number[], low: number, high: number) => {
  const pivot = arr[Math.floor((low + high) / 2)]
  let i = low - 1
  let j = high + 1
  while (true) {
    do {
      i++
    } while (arr[i] < pivot)
    do {
      j--
    } while (arr[j] > pivot)
    if (i >= j) {
      return j
    }
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

// Реализация быстрой сортировки
export const quickSortHoare = (
  arr: number[],
  low = 0,
  high: number = arr.length - 1
) => {
  if (low < high) {
    const pi = partitionHoare(arr, low, high)
    quickSortHoare(arr, low, pi)
    quickSortHoare(arr, pi + 1, high)
  }

  return arr
}
