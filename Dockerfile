FROM node:12

WORKDIR /src/gluecodes-todomvc
ADD . /src/gluecodes-todomvc

RUN yarn install
