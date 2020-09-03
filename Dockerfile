FROM node:lts

WORKDIR /usr/src/app
COPY ./ ./
RUN npm install
RUN echo 'salut' > token

ENTRYPOINT ["npm", "start"]
