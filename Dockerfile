FROM node:alpine

WORKDIR /app

ADD app .

RUN npm install

EXPOSE 8001

CMD [ "node", "server.js" ]