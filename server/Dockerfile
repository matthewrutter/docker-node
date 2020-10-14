#SERVER
FROM node AS server
WORKDIR /server
COPY . /server
RUN npm install
EXPOSE 8000
ENTRYPOINT [ "node", "server.js" ]    