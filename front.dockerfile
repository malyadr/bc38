FROM node:16
ENV NODE_ENV=main

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --legacy-peer-dep

COPY . .

EXPOSE 4000

CMD ["npm","start"]
