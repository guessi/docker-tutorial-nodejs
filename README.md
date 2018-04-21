# Tutorial: Dockerize a node HTTP Server

Step-by-step tutorial for bringing traditional app into Docker world,
but leave some questions and tips for brainstorming :-)


# Prerequisites

- Docker-CE 17.03+, or legacy Docker-engine 1.10.0+
- Docker Compose 1.10.0+


# Follow the steps

### Step 1: Prepare a simple app

    $ vim httpServer.js


### Step 2: Execute the app locally

    $ node httpServer.js


### Step 3: Search sutible official image

[Docker Hub](https://hub.docker.com/explore/)

if possible, try to use official image, but not to create customized one


### Step 4: Execute the app with Docker

    $ docker run --privileged -d \
        -v $(pwd):/opt/app:ro    \
        -w /opt/app              \
        -p 8080                  \
        node:8-alpine            \
          node httpServer.js

Question: how do I expose 8080 to world?


### Step 5: Dockerize the app with Dockerfile

    $ cat Dockerfile

    $ docker build -t http_server_image .

Question: what will happen if I change the file `httpServer.js`?


### Step 6: Execute the app via customized image

    $ docker run -d -p 8080 http_server_image

Question: how do I check the console log while it is running as daemon?


### Step 7: Define app with docker-compose

    $ cat docker-compose.yaml

    $ docker-compose down && docker-compose up

Question: when to use **down** command?


### Step 8: Try to modify the app

    $ vim httpServer.js

    $ docker-compose up

Question: why is the app not updated?


### Step 9: Increase capacity with "scale"

    $ docker-compose scale web=2

Question: why this command will failed? how to achieve the scaling goal?


### Step 10: Setup load balancer after application scaled

Question: how to setup load balancer to share loading across all the **web** service?


### Step 11: Connected the app with database

Question: hot to setup database connection between **web** service and database?


# Reference

- [Docker Engine](https://docs.docker.com/engine/)
- [Docker CE](https://www.docker.com/community-edition)
- [Docker Compose](https://docs.docker.com/compose/overview/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)


# License

[GPLv2](LICENSE)
