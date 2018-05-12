# Webservice Admin Panel (spike-vuetifyjs-nuxt)
> Webservice Admin Panel, made with Nuxt.js + Vuetify.js

## GOAL: having a working admin panel for a Telegram bot
_Admin page:_
 * Connection strings to other services
 * Connection strings to database
 * Log events

_Feature specific page:_
 * Edit features params

_Authentication:_ 
 * Restrict access & Login

## Step 1 - Architecture
_Exploring Nuxt.js + Vuetify.js, try to build a MVC architecture._
 * Using Pages as Views
 * Using Modules as Controllers (Vuex Modules)
 * Using Middleware as Model (& plugins)

## Step 2 - Tests
_Using unit tests to design functionalites._

### Using AVA 
Inspired by https://codeburst.io/nuxt-unit-snapshot-testing-a3dc7cb79ec1, solve Snapshot test issue.
Remaining:
 * e2e tests
 * Module tests
 * Middleware tests
 
 
## Step 3 - Modules
_Modules should give basic page functionalities & model comunication_

## Step 4 - Middleware
_Exploring Middleware functionalities._

## Step 5 - Views 
_Design full-featured pages for a Admin Panel._

## Step 6 - Authorization
_Using authorirazion to limitate user access._

## Dependecies
* VueJS2
* Vue Routes
* Vuex
* Nuxt
* Vuetify
* Ava


## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [Nuxt.js](https://github.com/nuxt/nuxt.js) and [Vuetify.js](https://vuetifyjs.com/) documentation.
