type AlfaOpacityType = 120 | 100 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 | 0
const AlfaOpacityArray = [120 | 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

const colorPicker = (payload: {
  opacity: AlfaOpacityType
  red: number
  green: number
  blue: number
}) => `rgba(${payload.red},${payload.green},${payload.blue},${payload.opacity / 100})`;

function ColorConstructor(red: number, green: number, blue: number, opacity: AlfaOpacityType = 100) {
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
  return color;
}

class ColorsScheme {
  //// Google Colors
  // Синий
  public GoogleBlue(opacity: AlfaOpacityType = 100) {
    const preview = '#0070b9';
    return ColorConstructor(0, 112, 185, opacity);
  }

  // Синий

  // Голубой
  GoogleCyan(opacity: AlfaOpacityType = 100) {
    const preview = '#009afe';
    return ColorConstructor(0, 154, 254, opacity);
  }

  // Голубой

  // Оранжевый
  GoogleOrange(opacity: AlfaOpacityType = 100) {
    const preview = '#e65706';
    return ColorConstructor(230, 87, 6, opacity);
  }

  // Оранжевый

  // Бирюзовый
  GoogleTurquoise(opacity: AlfaOpacityType = 100) {
    const preview = '#4dd6ca';
    return ColorConstructor(230, 87, 6, opacity);
  }

  // Бирюзовый
  //// Google Colors


  //// Raiffeisen Colors
  // Желтый
  RaiffeisenYellow(opacity: AlfaOpacityType = 100) {
    const preview = '#FEE600';
    return ColorConstructor(254, 230, 0, opacity);
  }
  // Желтый

  // Желтый
  RaiffeisenRed(opacity: AlfaOpacityType = 100) {
    const preview = '#EE505A';
    return ColorConstructor(238, 80, 90, opacity);
  }
  // Желтый

  // Желтый
  RaiffeisenBlue(opacity: AlfaOpacityType = 100) {
    const preview = '#00A5BC';
    return ColorConstructor(0, 165, 188, opacity);
  }
  // Желтый

  // Желтый
  RaiffeisenTurquoise(opacity: AlfaOpacityType = 100) {
    const preview = '#19B28D';
    return ColorConstructor(25, 178, 141, opacity);
  }
  // Желтый

  // Желтый
  RaiffeisenOrange(opacity: AlfaOpacityType = 100) {
    const preview = '#F88545';
    return ColorConstructor(248, 133, 69, opacity);
  }
  // Желтый


  //// Raiffeisen Colors

}


export default new ColorsScheme();