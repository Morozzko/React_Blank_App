import { useEffect } from 'react'

const keys = [
  'REACT_APP_BACKEND_IP',
  'REACT_APP_PUBLIC_PATH',
  'REACT_APP_ROOT_PUBLIC_PATH',
  'REACT_APP_MF_APP_AUTH',
  'REACT_APP_MF_APP_AUTH_PUBLIC_PATH',
  'REACT_APP_MF_APP_DASHBOARD',
  'REACT_APP_MF_APP_DASHBOARD_PUBLIC_PATH',
  'REACT_APP_MF_APP_CARD',
  'REACT_APP_MF_APP_CARD_PUBLIC_PATH',
]

export const useContainer: SC = () => {
  useEffect(() => {
    keys.forEach(key => {
      // console.log(`${key}: `, process.env[key])
    })
  }, [])
}
