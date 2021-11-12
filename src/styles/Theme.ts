import { px2vw } from './mixins';
import  ColorsScheme  from './ColorsScheme';



export const Theme = {
  // Initialization
  backgroundColor: '#0D0D11',
  primaryColor: '#FFFFFF',
  normalFontSize: `${px2vw(18)}`,

  // H1
  H1FontSize: `${px2vw(48)}`,
  H1FontWeight: 700,
  // H1

  // H2
  H2FontSize: `${px2vw(36)}`,
  H2FontWeight: 600,
  // H2

  // H3
  H3FontSize: `${px2vw(24)}`,
  H3FontWeight: 500,
  // H3

  // Link color
  LinkColor: ColorsScheme.GoogleOrange()
  // Link color

  // Initialization

};