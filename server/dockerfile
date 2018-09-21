FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npx tsc

CMD npm start
EXPOSE 3000