type AlfaOpacityType = 100 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10
const AlfaOpacityArray = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]

const colorPicker = (payload: { opacity: AlfaOpacityType; red: number; green: number; blue: number }) =>
  `rgba(${payload.red},${payload.green},${payload.blue},${payload.opacity / 100})`

function ColorConstructor(red: number, green: number, blue: number, opacity: AlfaOpacityType = 100): string {
  let color
  AlfaOpacityArray.forEach(ele => {
    if (opacity === ele) {
      color = colorPicker({
        opacity,
        red,
        green,
        blue,
      })
    }
  })
  // @ts-ignore
  return color
}

class ColorsScheme {
  //// Google Colors
  // Синий
  public GoogleBlue(opacity: AlfaOpacityType = 100) {
    const preview = '#0070b9'
    return ColorConstructor(0, 112, 185, opacity)
  }
  // Синий

  // Голубой
  public GoogleCyan(opacity: AlfaOpacityType = 100) {
    const preview = '#009afe'
    return ColorConstructor(0, 154, 254, opacity)
  }
  // Голубой

  // Оранжевый
  public GoogleOrange(opacity: AlfaOpacityType = 100) {
    const preview = '#e65706'
    return ColorConstructor(230, 87, 6, opacity)
  }
  // Оранжевый

  // Бирюзовый
  public GoogleTurquoise(opacity: AlfaOpacityType = 100) {
    const preview = '#4dd6ca'
    return ColorConstructor(77, 214, 202, opacity)
  }
  // Бирюзовый
  //// Google Colors

  //// Raiffeisen Colors
  // Желтый
  public RaiffeisenYellow(opacity: AlfaOpacityType = 100) {
    const preview = '#FEE600'
    return ColorConstructor(254, 230, 0, opacity)
  }
  // Желтый

  // Красный
  public RaiffeisenRed(opacity: AlfaOpacityType = 100) {
    const preview = '#EE505A'
    return ColorConstructor(238, 80, 90, opacity)
  }
  // Красный

  // Синий
  public RaiffeisenBlue(opacity: AlfaOpacityType = 100) {
    const preview = '#00A5BC'
    return ColorConstructor(0, 165, 188, opacity)
  }
  // Синий

  // Бирюзовый
  public RaiffeisenTurquoise(opacity: AlfaOpacityType = 100) {
    const preview = '#19B28D'
    return ColorConstructor(25, 178, 141, opacity)
  }
  // Бирюзовый

  // Оранжевый
  public RaiffeisenOrange(opacity: AlfaOpacityType = 100) {
    const preview = '#F88545'
    return ColorConstructor(248, 133, 69, opacity)
  }
  // Оранжевый

  // Белый
  public RaiffeisenWhite(opacity: AlfaOpacityType = 100) {
    const preview = '#F4F4F4'
    return ColorConstructor(244, 244, 244, opacity)
  }
  // Белый

  // Черный
  public RaiffeisenBlack(opacity: AlfaOpacityType = 100) {
    const preview = '#2B2D33'
    return ColorConstructor(43, 45, 51, opacity)
  }
  // Черный
  //// Raiffeisen Colors

  //// AlfaBank Colors
  // Черный
  public AlfaBankBlack(opacity: AlfaOpacityType = 100) {
    const preview = '#2f2f2f'
    return ColorConstructor(47, 47, 47, opacity)
  }
  // Черный
  //// AlfaBank Colors
}

export default new ColorsScheme()
