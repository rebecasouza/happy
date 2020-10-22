FROM node:12.19.0-alpine3.12

WORKDIR /usr/src/app

COPY package.*json yarn.* ./

RUN apk update \
  && chown node:node /usr/src/app \
  && yarn \   
  && yarn cache clean --mirror --all

USER node

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]