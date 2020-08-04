FROM node:12.16.3-slim as builder

WORKDIR /usr/app

COPY package.json ./

RUN yarn install

COPY src src
COPY public public
COPY tsconfig.json .
COPY config-overrides.js .

ARG REACT_APP_SERVER_URL=http://localhost:4000/graphql
ENV REACT_APP_SERVER_URL="${REACT_APP_SERVER_URL}"

RUN npm run build

FROM nginx:1.17.3

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/app/build /usr/share/nginx/html