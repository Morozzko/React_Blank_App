// Сортировка выбором (Selection Sort).
// 1. Найти минимальный элемент в массиве и поменять его местами с элементом на первой позиции.

// Временная сложность сортировки выбором составляет O(n^2), где n - количество элементов в массиве.
// Это делает ее неэффективной для больших массивов.
export const selectionSort = (inputArray: number[]): number[] => {
  const length = inputArray.length
  for (let currentIndex = 0; currentIndex < length - 1; currentIndex++) {
    // Помечаем первый элемент в итерации самым первым
    let smallestElementIndex = currentIndex
    for (let nextIndex = currentIndex + 1; nextIndex < length; nextIndex++) {
      // Если следующий элемент меньше помеченного, заменяем индекс
      if (inputArray[nextIndex] < inputArray[smallestElementIndex]) {
        smallestElementIndex = nextIndex
      }
    }
    if (smallestElementIndex !== currentIndex) {
      const temp = inputArray[currentIndex]
      inputArray[currentIndex] = inputArray[smallestElementIndex]
      inputArray[smallestElementIndex] = temp
    }
    // На следующей итерации, мы уже не будем трогать первый элемент в массиве
  }

  return inputArray
}
