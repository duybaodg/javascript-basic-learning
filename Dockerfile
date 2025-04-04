FROM ubuntu

WORKDIR /src

RUN apt-get update
RUN apt-get -y install python3

COPY api.html ./api.html

CMD ["cat", "api.html"]