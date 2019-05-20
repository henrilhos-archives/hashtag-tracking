# Hashtag Tracking [![Build Status](https://travis-ci.com/castilh0s/Hashtag-Tracking.svg?branch=master)](https://travis-ci.com/castilh0s/Hashtag-Tracking)

> Projeto para busca e acompanhamento de hashtags desenvolvido para o teste da [Magrathea Labs](https://www.magrathealabs.com/).

## Requisitos

Para rodar o projeto localmente é necessário o [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) e o [MongoDB](https://www.mongodb.com/).

Além disso é preciso criar um aplicativo para o Twitter, atráves [deste endereço](https://developer.twitter.com/) e obter a API key, API secret key, access token e access token secret.

Após isso é necessário definir as váriaveis de ambiente:

```bash
export TWITTER_CONSUMER_KEY="API key"
export TWITTER_CONSUMER_SECRET="API secret key"
export TWITTER_ACCESS_TOKEN_KEY="Access token"
export TWITTER_ACCESS_TOKEN_SECRET="Access token secret"

export MONGODB_URI="mongodb://localhost:27017/hashtag_tracking" # URL Padrão
```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```
