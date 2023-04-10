FROM node:14

COPY . /var/www

WORKDIR /var/www

RUN npm install
RUN npm build

CMD ["npm", "start:prod"]