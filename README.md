# Webservice Admin Panel (spike-vuetifyjs-nuxt)
> Webservice Admin Panel, made with Nuxt.js + Vuetify.js

Nuxt.js integrates:
- VueJS2
- Routes
- Vuex

 ## Example: Telegram bot console
Main Features:
 * Login
 * General settings
 * Autoresponder settings
 * Service logs

## Architecture
_Exploring Nuxt.js + Vuetify.js, try to build a MVC architecture._
 * Using Pages as Views
 * Using Modules as Controllers (Vuex Modules)
 * Using Middleware as Model (& plugins)
 
## Tests
_Using unit tests to design functionalites._

### Using AVA 
Inspired by https://codeburst.io/nuxt-unit-snapshot-testing-a3dc7cb79ec1, solve Snapshot test issue.
- Testing Sign In component.
- [TODO] Test Sign up component.

Remaining:
 * e2e tests
 * Module tests
 * Middleware tests
 
 ## Views 
_Design full-featured pages for a Admin Panel._
Pages
 * #### Home => Login Feature
 * #### Configs => General Settings Feature
 * #### Replies => Autoresponder Feature
 * #### Logs => Service Logs Feature
 
## Modules
_Modules should give basic page functionalities & model comunication_
 #### Home
 Provides authentication functionality.
 
 #### Configs
 CRUD on DB
 
 #### Replies
 CRUD on DB
 
 #### Logs
 Read from db
 
## Step 4 - Middleware
_Exploring Middleware functionalities._


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
