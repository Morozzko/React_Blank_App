# Берем официальный образ Node.js для сборки приложения
FROM node:18.12.1 as build

WORKDIR /app

COPY package.json /app/package.json

COPY . /app


RUN yarn
RUN yarn build

FROM nginx:1.23.4-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
