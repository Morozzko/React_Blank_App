export enum MobileSizeTable {
  mobileS =320,
  mobileM=375,
  mobileL=425,
  tablet=768,
  laptop=1024,
  laptopL=1440,
  desktop=2560,
}


export const MediaQueries = {
  mobileS: `(min-width: ${MobileSizeTable.mobileS}px)`,
  mobileM: `(min-width: ${MobileSizeTable.mobileM}px)`,
  mobileL: `(min-width: ${MobileSizeTable.mobileL}px)`,
  tablet: `(min-width: ${MobileSizeTable.tablet}px)`,
  laptop: `(min-width: ${MobileSizeTable.laptop}px)`,
  laptopL: `(min-width: ${MobileSizeTable.laptopL}px)`,
  desktop: `(min-width: ${MobileSizeTable.desktop}px)`,
  desktopL: `(min-width: ${MobileSizeTable.desktop}px)`,
}
