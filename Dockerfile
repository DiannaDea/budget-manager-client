FROM node:alpine
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.lock /app/package-lock.lock
ENV PATH /app/node_modules/.bin:$PATH
RUN npm i
CMD ["npm", "start"]