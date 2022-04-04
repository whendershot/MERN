FROM ubuntu:20.04

#Update Ubuntu
RUN apt-get update

#Install dependencies
RUN apt-get install -y curl wget gnupg sudo

#Install NodeJS
RUN curl -fsSL https://deb.nodesource.com/setup_16.14.2 | bash -
RUN apt-get install -y nodejs

#Install MongoDB
RUN wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | apt-key add -
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-5.0.list
RUN apt-get update
RUN apt-get install -y mongodb-org=5.0.6 mongodb-org-database=5.0.6 mongodb-org-server=5.0.6 mongodb-org-shell=5.0.6 mongodb-org-mongos=5.0.6 mongodb-org-tools=5.0.6
