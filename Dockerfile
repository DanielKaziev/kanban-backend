ARG NODE_VERSION=20.17-alpine

FROM node:${NODE_VERSION} AS builder
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN mkdir -p /usr/src/app/dist/proto
RUN cp /usr/src/app/src/proto/*.proto /usr/src/app/dist/proto

FROM node:${NODE_VERSION}
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package*.json ./

RUN npm install --only=production

ENV PORT=5005
ENV NODE_ENV=production

EXPOSE ${PORT}

CMD ["npm", "start"]
