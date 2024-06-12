FROM node:latest

WORKDIR /usr/src/index

COPY . .

EXPOSE 8000

RUN npm install

CMD ["nodemon", "src/index.js"]
