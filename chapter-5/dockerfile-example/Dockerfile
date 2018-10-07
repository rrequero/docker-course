FROM alpine:3.6
LABEL maintainer="Raul Requero<rrequero@gmail.com>"
LABEL version="1.0"
LABEL description="Dockerfile example"

RUN apk update && \
    apk add nginx && \
    rm -rf /var/cache/apk/* && \
    mkdir -p /run/nginx

COPY default.conf /etc/nginx/conf.d/default.conf

ADD web.tar.gz /usr/share/nginx/html

EXPOSE 80/tcp

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]