FROM google/nodejs

ADD . /opt/app
EXPOSE 3456

WORKDIR /opt/app 
RUN npm install
RUN npm run build

CMD node /opt/app/app.js