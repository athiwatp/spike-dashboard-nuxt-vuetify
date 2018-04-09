# PAGES

This directory contains your Application Views and Routes.
The framework reads all the .vue files inside this directory and create the router of your application.

## Home
Home page has two layouts, one when user's logged in the other when it's not.
  * When the user is logged in, the page displays its feature for that user.
  * Welcome layout should provides two features, Sign in & Sign up.
  
## Configs
General settings page (or simply Configs) contains a form for editing some parameters.
  * Params are loaded from a db through middleware & modules. (page => modules => middleware => db)

## Autoresponder
In this example (Telegram bot that should reply to some answer) the service provides an autoresponder.
  * Many words or sentences are binded to a specific response.
  * The user should be able to add/edit/delete this binding.

## Logs
The service stays up all the time, update itself and provides its feature. 
It also logs many infos about what it's doing.
  * This page has to provide a list of logs sortable and filtrable.
  

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/routing
