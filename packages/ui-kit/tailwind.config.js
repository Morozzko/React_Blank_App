import config from '@npm.piece/tailwind-config'
/** @type {import('tailwindcss').Config} */

export default {
  ...config,
  content: config.content.concat(['./index.html']),
}
