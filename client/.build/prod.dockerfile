FROM node:latest

WORKDIR /client
COPY . .

RUN npm install
RUN npm run build


FROM nginx:alpine

COPY ./.build/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=0 /client/dist .