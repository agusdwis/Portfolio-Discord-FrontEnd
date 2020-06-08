FROM nginx:stable
MAINTAINER Agus Dwi "agusdwi@alterra.id"

RUN mkdir -p /home/agus-db/www/Portfolio-Discord-FrontEnd/build
RUN mkdir -p /home/agus-db/log
RUN mkdir -p /home/agus-db/cert

COPY default.conf /etc/nginx/conf.d/
ADD /build/. /home/agus-db/www/Portfolio-Discord-FrontEnd/build

WORKDIR /home/agus-db/www/Portfolio-Discord-FrontEnd/build
