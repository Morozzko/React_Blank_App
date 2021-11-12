type AlfaOpacityType = 100 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 | 0
const AlfaOpacityArray = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

const colorPicker = (payload: {
  opacity: AlfaOpacityType
  red: number
  green: number
  blue: number
}) => `rgba(${payload.red},${payload.green},${payload.blue},${payload.opacity / 100})`;

function ColorConstructor(red:number,green:number,blue:number,opacity: AlfaOpacityType = 100) {
  let color;
  AlfaOpacityArray.forEach(ele => {
    if (opacity === ele) {
      color = colorPicker({
        opacity,
        red,
        green,
        blue
      });
    }
  });
  return color
}

 class ColorsScheme {
  //// Google Colors
  // Синий
  public GoogleBlue(opacity: AlfaOpacityType = 100) {
    const preview = '#0070b9'
    return ColorConstructor(0,112,185,opacity)
  }
  // Синий

  // Голубой
  GoogleCyan(opacity: AlfaOpacityType = 100) {
    const preview = '#009afe'
    return ColorConstructor(0,154,254,opacity)
  }
  // Голубой

  // Оранжевый
  GoogleOrange(opacity: AlfaOpacityType = 100) {
    const preview = '#e65706'
    return ColorConstructor(230,87,6,opacity)
  }
  // Оранжевый

  // Бирюзовый
  GoogleTurquoise(opacity: AlfaOpacityType = 100) {
    const preview = '#4dd6ca'
    return ColorConstructor(230,87,6,opacity)
  }
  // Бирюзовый
  //// Google Colors

}


export default new ColorsScheme()