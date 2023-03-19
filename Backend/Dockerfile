FROM node:16-alpine as build
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./
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
ARG DATABASE_NAME=abdelrahman-oasis-cms-database
ARG INSTANCE_CONNECTION_NAME=abdelrahman-oasis:us-central1:abdelrahman-oasis-database
ARG DATABASE_USERNAME=root
ARG DATABASE_PASSWORD=a@n2S-oqRYjip~8x
ENV DATABASE_NAME=${DATABASE_NAME}

ARG INSTANCE_UNIX_SOCKET=/cloudsql/abdelrahman-oasis:us-central1:abdelrahman-oasis-database
ENV INSTANCE_UNIX_SOCKET=${INSTANCE_UNIX_SOCKET}
ARG MY_GCR_URL=https://abdelrahmanoasis-cms-fjf3vmxuqa-uc.a.run.app/
ENV MY_GCR_URL=${MY_GCR_URL}
ENV INSTANCE_CONNECTION_NAME=${INSTANCE_CONNECTION_NAME}
ENV DATABASE_USERNAME=${DATABASE_USERNAME}
ENV DATABASE_PASSWORD=${DATABASE_PASSWORD}
ARG HOST=0.0.0.0
ARG PORT=1337
ARG APP_KEYS=Sy4i/DrBhmWtYJv9M8MTEA==,n9x97nzMY23gK1i/cGd4gQ==,Uzx+mXEigUvF7LKdbWYgmQ==,WF3UY9xmWHIOggVdEXviZw==
ARG API_TOKEN_SALT=uyedbzLoA5J07gZygQmUfg==
ARG ADMIN_JWT_SECRET=g82PVlWBgd4yMF6fJjGQUw==
ARG JWT_SECRET=3UNUr7lWfUQTNKtGB76yJQ==
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
