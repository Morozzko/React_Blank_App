export enum RoutesEnum {
  main = '/',
  auth = '/auth/',
  settings = '/settings/',
  dashboards = '/dashboards/',
  registry = '/documents/',
  card = '/card/',
}

export enum PagesEnum {
  cardId = ':cardId/',
  edit = 'edit/',
}

export const routes = {
  cardById: `${RoutesEnum.card}${PagesEnum.cardId}`,
  dashboardsEdit: `${RoutesEnum.dashboards}${PagesEnum.edit}`,
  dashboardMain: RoutesEnum.main,
}
