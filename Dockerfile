FROM node:lts

WORKDIR /usr/src/app
COPY ./ ./
RUN npm install
RUN echo 'mypersonaltoken' > token

ENTRYPOINT ["npm", "start"]
