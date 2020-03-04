# set base image
FROM node:13.8.0-alpine3.10

LABEL MAINTAINER="Justin Ndwiga"

WORKDIR /meaower
# copy dependency files
COPY package.json /meaower/package.json
COPY yarn.lock /meaower/yarn.lock
#copy source files
COPY src .
# install dependencies
RUN yarn
# start the container
CMD ["yarn", "start"]