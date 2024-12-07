export const mf = {
  root: process.env.REACT_APP_ROOT_PUBLIC_PATH,
  auth: process.env.REACT_APP_MF_APP_AUTH_PUBLIC_PATH,
  dashboards: process.env.REACT_APP_MF_APP_DASHBOARD_PUBLIC_PATH,
  card: process.env.REACT_APP_MF_APP_CARD_PUBLIC_PATH,
  registry: process.env.REACT_APP_MF_APP_REGISTRY_PUBLIC_PATH,
} as const
