FROM node:alpine
WORKDIR /server/

COPY package.json ./

RUN npm install
COPY app.js .
COPY items.js . 

CMD ["node", "app.js", "items.js"]


