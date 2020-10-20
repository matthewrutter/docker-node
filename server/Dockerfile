#SERVER
FROM node AS server
WORKDIR /server
COPY . /server
RUN npm install
ENTRYPOINT [ "node", "server.js" ]    