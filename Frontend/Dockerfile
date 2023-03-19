FROM node:16
# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
COPY ./package.json  ./
ENV PATH /opt/node_modules/.bin:$PATH
# RUN yarn config set network-timeout 600000 -g && yarn install
RUN npm install
WORKDIR /opt/app
COPY ./ .
RUN npm run build
EXPOSE 1337
CMD ["yarn", "start"]


