FROM alpine
LABEL developer="countingpeag56@gmail.com"
RUN apk add --update nodejs npm
COPY . /src
WORKDIR /src
RUN npm install

EXPOSE 8080
ENTRYPOINT ["node", "./app.js"]
