// Сортировка вставками (Insertion Sort) — это алгоритм сортировки, который строит отсортированный массив (или список),
// один элемент за раз.
//
// Суть алгоритма создать группу элементов, и отсортировать ее, далее сравнить новый элемент с группой,
// и если он меньше элемента в группе, начать его сортировать внутри группы, иначе просто добавить его.
//
// Он относится к категории сортировок на месте и эффективно работает на небольших наборах данных.
//
// Временная сложность алгоритма сортировки вставками составляет O(n^2) в худшем случае
export const insertionSort = (inputArray: number[]): number[] => {
  const length = inputArray.length
  for (let currentIndex = 1; currentIndex < length; currentIndex++) {
    // Текущее значение
    const value = inputArray[currentIndex]

    // Индекс предыдущего значения
    let previousIndex = currentIndex - 1

    // Если текущий элемент меньше элемента в отсортированной части, мы продолжаем "сдвигать" элементы
    // в отсортированной части вправо, пока не найдем подходящее место для вставки.
    while (previousIndex >= 0 && inputArray[previousIndex] > value) {
      inputArray[previousIndex + 1] = inputArray[previousIndex]
      previousIndex = previousIndex - 1
    }
    // Затем вставляем элемент на его новое место
    inputArray[previousIndex + 1] = value
  }

  return inputArray
}
