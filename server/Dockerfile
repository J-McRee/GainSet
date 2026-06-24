FROM node:22-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

RUN mkdir -p /data
RUN node src/db/migrate.js

EXPOSE 3001
CMD ["node", "src/index.js"]
