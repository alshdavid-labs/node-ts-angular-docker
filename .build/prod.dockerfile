# Build client
FROM node:alpine

WORKDIR /client
COPY client .

RUN npm install
RUN npm run build


# Build server
FROM node:alpine

WORKDIR /server
COPY server .

RUN npm install
RUN npm run build

# Build production container
FROM node:alpine

WORKDIR /app
COPY --from=1 /server/dist .
COPY --from=1 /server/node_modules node_modules
COPY --from=0 /client/dist public

CMD ["node", "index.js"]