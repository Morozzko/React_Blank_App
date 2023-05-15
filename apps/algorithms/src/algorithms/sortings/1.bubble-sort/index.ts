// Сортировка пузырьком (Bubble Sort).
// Суть алгоритма вывести за одну итерацию самый большой элемент в конец массива, после этого повторить все заново.
//
// Сложность алгоритма сортировки пузырьком в худшем случае составляет O(n^2),
// где n - количество элементов в массиве. Это делает его неэффективным для больших наборов данных.
export const bubbleSort = (arr: number[]): number[] => {
  let length = arr.length
  let swapped

  do {
    swapped = false
    for (let currentIndex = 0; currentIndex < length; currentIndex++) {
      if (arr[currentIndex] > arr[currentIndex + 1]) {
        const temp = arr[currentIndex]
        arr[currentIndex] = arr[currentIndex + 1]
        arr[currentIndex + 1] = temp
        swapped = true
      }
    }
    // Уменьшаем длину, потому что последний элемент уже на своем месте
    length--
  } while (swapped) // Если на этом проходе не было обменов, значит, массив уже отсортирован

  return arr
}
