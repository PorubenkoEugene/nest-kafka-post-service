# Test Nest-Kafka

## Pre-requisites

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Usage

- Clone this repo on a machine where you'd like to deploy api application
- RUN `docker-compose up`

## Available producer endpoints. Copy curl after success network started to send a request. 

* GET
    * posts
        > curl --request GET  --url http://127.0.0.1:3030/posts

* POST
    * posts 
        > curl --request POST --url http://127.0.0.1:3030/posts --header 'Content-Type: application/json' --data '{"title": "Post 1","description": "Desc 1"}'    
