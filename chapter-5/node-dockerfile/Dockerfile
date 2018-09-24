FROM debian:latest

LABEL maintainer="Raul Requero <rrequero@gmail.com>"

ENV NVM_DIR=/usr/local/nvm

# replace shell with bash -> you can use source
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && apt-get install -y curl

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install 10.2.0 \
    && nvm alias default 10.2.0 \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v10.2.0/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v10.2.0/bin:$PATH

ENTRYPOINT ["node"]

CMD ["-v"]

