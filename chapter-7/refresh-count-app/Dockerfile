FROM node:10.2.0-alpine
LABEL maintainer="Raul Requero <rrequero@gmail.com>"

RUN mkdir /opt/click-app

WORKDIR /opt/click-app

ENV NODE_ENV=production
ENV PORT=3000
ENV MONGO_HOST=mongo

COPY package.json /opt/click-app/package.json
RUN npm install
COPY src /opt/click-app/src

EXPOSE 3000/tcp

ENTRYPOINT ["npm", "start"]

