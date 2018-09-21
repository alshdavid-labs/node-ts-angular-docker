FROM node:alpine

WORKDIR /client

COPY . .

RUN npm install
CMD ["npm", "run", "start"]