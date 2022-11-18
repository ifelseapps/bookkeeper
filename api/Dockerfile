FROM node:18-alpine

RUN npm i -g @nestjs/cli

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

CMD [ "npm", "run", "start:dev" ]
