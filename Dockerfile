FROM node:6-alpine
COPY httpServer.js /opt/app/
EXPOSE 8080
CMD [ "node", "/opt/app/httpServer.js" ]
