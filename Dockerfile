FROM nginx:stable
MAINTAINER Agus Dwi "agusdwi@alterra.id"

RUN mkdir -p /home/discord/www/Portfolio-Discord-FrontEnd/build
RUN mkdir -p /home/discord/log
RUN mkdir -p /home/discord/cert

COPY default.conf /etc/nginx/conf.d/
ADD /build/. /home/discord/www/Portfolio-Discord-FrontEnd/build

WORKDIR /home/discord/www/Portfolio-Discord-FrontEnd/build
