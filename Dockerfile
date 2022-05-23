FROM node:stable

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install grpc

RUN npm install

ENTRYPOINT ["npm", "start"]