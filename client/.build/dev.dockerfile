FROM node:latest

WORKDIR /client

COPY . .

RUN npm install
CMD ["npm", "run", "start"]