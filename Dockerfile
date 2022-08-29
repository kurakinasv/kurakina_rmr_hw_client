# node stage

FROM node:17-alpine as build

WORKDIR /app

COPY package*.json ./
COPY yarn.lock .

RUN yarn install --immutable --immutable-cache --check-cache

COPY . ./

RUN yarn build 

CMD ["yarn", "start"]

# nginx stage

FROM nginx:1.21.3-alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /app/build .

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY --from=build /app/etc/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
