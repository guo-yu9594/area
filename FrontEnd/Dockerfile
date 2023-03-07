FROM node:alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

COPY . .

RUN npm install


EXPOSE 8081

ENTRYPOINT [ "./wait-for-file.sh" ]

CMD ["npm", "run", "start"]