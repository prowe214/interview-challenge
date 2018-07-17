# Instructions to Start

Thanks for the opportunity to play around with your data, I like charting and hadn't used Highcharts before so this was a fun opportunity to toy around with a new library.

I implemented the following:
* Interactive Charts with Highcharts
* React + Typescript
* Rudimentary responsiveness in the grid
* Light documentation explaining certain functions

If I were to continue working on this, my next steps would be:
* Separating the line charts of Mobile Devices vs Tablets, because there was some ugly data "collision" revealed in the chart (multiple data points on the same hour)
* Adding unit tests -- which is new for me in React and Jest, and how it plays with Typescript
* Redux for state management -- its kind of overkill in the current form, but would be useful if implementing filtering and advanced chart interaction
* Serving from the same `npm start`, so we don't have to run two separate servers
* Playing with how this UI is displayed in React Native, for the hypothetical that a customer could always access their account's data via a native app

## To Start the App

* Log in to your computer
* Email your credit card information to totallyreal@noscamyourethescam.com
* From the root of the project, run `npm start` to get the db server running
* `cd ui`, and `npm run start` to get the ui serving on `localhost:3000`


AdCellerant Front End Code Challenge
------------------------------------

Hello!

Thank you for your interest in the AdCellerant engineering team! This is an open ended challenge
giving you full creative license to do as you please. We have set up for you a very simple node
server serving up some JSON at `localhost:3000/data`. Your task is to display this data in an interesting
and efficient way using whichever technology you're comfortable with. We're looking for fluency in javascript,
appropriate use of markup, and responsive styling. When you've completed this challenge create a pull request,
update the README on how to get your submission running, and our engineering team will review it.


Bonus Points for:

- Tests
- Interactive Charts
- React/Angular 

Instructions For Install
------------------------
- Fork and clone the repo
- `npm install`
- `npm start`

