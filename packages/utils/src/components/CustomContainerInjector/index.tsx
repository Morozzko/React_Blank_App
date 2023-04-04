type OwnPropertyType = {
  containers: Array<() => void>
}

// Компонент Custom Container Injector (CCI) предназначен для инжектирования кастомных хуков, содержащих useEffect,
// в ваше приложение без вызова повторного рендера дочерних компонентов.
//
// CCI принимает массив хуков-контейнеров в качестве свойства containers и вызывает каждый из них.
// Это позволяет выполнить все сайд-эффекты, определенные в хуках-контейнерах, в одном месте и
// без влияния на рендеринг иерархии компонентов вашего приложения.
//
// Таким образом, CCI может быть полезным инструментом для оптимизации производительности и организации кода,
// так как он позволяет разделять логику сайд-эффектов от дерева компонентов и связанных с ним рендеров.
export const CustomContainerInjector = ({ containers }: OwnPropertyType) => {
  containers.forEach(container => container())

  return null
}
