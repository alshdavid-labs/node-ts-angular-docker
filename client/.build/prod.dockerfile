# Build client
FROM node:alpine

WORKDIR /client
COPY . .

RUN npm install
RUN npm run build

# Serve client from nginx with SPA config
FROM nginx:alpine

COPY ./.build/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=0 /client/dist .