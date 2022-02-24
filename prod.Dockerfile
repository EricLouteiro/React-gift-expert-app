FROM nginx:1.20-alpine

RUN rm /usr/share/nginx/html/50x.html /usr/share/nginx/html/index.html

COPY /docs /usr/share/nginx/html 
