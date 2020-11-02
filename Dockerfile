# FROM debian:latest
FROM node:latest

RUN mkdir -p /app/src
WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3300

CMD [ "npm", "run", "dev" ]

# commands
# % docker images // show  all images
# % docker ps // show what all processes are running
# % docker build . // build a docker image from local directory (where dockerfile is located)
# % docker build . -t reactapp // build a docker image and name it
# % docker run  // to start image