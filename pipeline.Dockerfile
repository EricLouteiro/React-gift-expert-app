FROM node:14.18-alpine3.12

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD npm run test