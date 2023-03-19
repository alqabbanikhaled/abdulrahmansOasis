FROM node:16-alpine as build
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json  ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install
WORKDIR /opt/app
COPY ./ .
RUN yarn build

FROM node:16-alpine
RUN apk add vips-dev
RUN rm -rf /var/cache/apk/*
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ARG DATABASE_NAME=abdelrahmanoasis-database
ARG INSTANCE_CONNECTION_NAME=abdelrahman-oasis:us-central1:abdelrahmanoasis-database
ARG DATABASE_USERNAME=postgres
ARG DATABASE_PASSWORD=a@n2S-oqRYjip~8x
ENV DATABASE_NAME=${DATABASE_NAME}
ENV INSTANCE_CONNECTION_NAME=${INSTANCE_CONNECTION_NAME}
ENV DATABASE_USERNAME=${DATABASE_USERNAME}
ENV DATABASE_PASSWORD=${DATABASE_PASSWORD}
ARG HOST=0.0.0.0
ARG PORT=1337
ARG APP_KEYS=OlAk1etiMd6zop1mGtG4Jg==,axPpF9JEozFZgPzbyQn6bg==,mws1q8m6i9ZlzykTcKzaAg==,hOaMg6QxiLpzqKgMi9gJ3A==
ARG API_TOKEN_SALT=2ZGW2SONwU82alrnbtKdxw==
ARG ADMIN_JWT_SECRET=VMW52mCQkckE31VbreUlIw==
ARG JWT_SECRET=fIGFk0CWM8opRfo3NF1KoQ==
ENV HOST=${HOST}
ENV PORT=${PORT}
ENV APP_KEYS=${APP_KEYS}
ENV API_TOKEN_SALT=${API_TOKEN_SALT}
ENV ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET}
ENV JWT_SECRET=${JWT_SECRET}
WORKDIR /opt/app
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
COPY --from=build /opt/app ./
EXPOSE 1337
CMD ["yarn", "start"]