FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm build --prod
FROM nginx:apline
COPY --from=node /app/dist/bookswebDocker usr/share/nginx/html