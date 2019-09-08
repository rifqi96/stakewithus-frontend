FROM node:12.10-alpine

ARG NODE_ENV=${NODE_ENV}

ENV NODE_ENV ${NODE_ENV}
ENV USER www
ENV USERDIR /var/${USER}
ENV WORKDIR ${USERDIR}/html
ENV ETCDIR ./docker-etc/node

# Set current workdir
WORKDIR ${WORKDIR}

# install simple http server for serving static content
RUN npm install -g http-server

# Copy the start script to the container
COPY ${ETCDIR}/start.sh ${USERDIR}/scripts/
RUN chmod +x ${USERDIR}/scripts/start.sh

# Copy the app source
ADD ./src ${WORKDIR}

# Expose serving port
EXPOSE 8080
# Run ci from package-lock, then run the start script
CMD ["sh", "-c", "npm ci && ${USERDIR}/scripts/start.sh"]
