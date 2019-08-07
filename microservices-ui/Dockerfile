FROM node:12.7-alpine AS dev
WORKDIR /ui
COPY . .
RUN npm install -g @angular/cli && npm install
EXPOSE 8000
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "8000", "--poll=2000"]

FROM dev AS builder
RUN ng build --prod

FROM nginx:alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /ui/dist/microservices-ui /usr/share/nginx/html
RUN apk add --no-cache curl
HEALTHCHECK CMD curl --silent --fail http://localhost/ || exit 1
