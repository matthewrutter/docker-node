#Database
FROM mongo
ENV MONGO_INITDB_ROOT_USERNAME="root"
ENV MONGO_INITDB_ROOT_PASSWORD="password"
COPY ./startup_scripts/*.sh /docker-entrypoint-initdb.d/
COPY ./data /data/