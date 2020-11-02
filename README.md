# Tandem Trivia

A React app I made as a coding challenge for my application to Tandem

## Setup 

1. Download or clone this repository
2. `npm install`
3. To run in development environment, `npm start` OR to run it in production
   1. `npm run build`
   2. `npm install -g serve`
   3. `serve -s build`
   4. The production app is now running on `http://localhost:5000`

## Features

- Basic authentication system - there's no database, so all user data is stored on localstorage.
- Every round the game grabs 10 raandom trivia questions from a JSON file. Every question is worth 100 points each.
- At the end of a round, if the current score is greater than a user's previous high score, a new high score is set.
- The top 5 users are shown at the end of each round.

## Technologies

- The app is made with React JS
- Redux is used to store and update the current score
- I used Grommet to speed up the styling and to ensure overall aesthetic cohesion

## Limitations

This app was mainly made as a demonstration of my React and Javascript skills, and as such, doesn't include any sort of backend. At a certain point, the users data will become too large for localstorage to hold. 

Right now, it is possible to go a round without answering any questions at all, this is generally fine, but ideally a user would not be able to progress to the next question without answering

I wanted to integrate Jest to write unit tests, but I haven't written tests for React components before, so I made the decision to forgo it and use the debugger devtool instead.

## Possible future features

- A challenge mode that introduces a multiplier- right answers will add 100 * the multiplier to the score and then increase the multiplier by 1, wrong answers would subtract 100 * the multiplier and reset it back to 0.
- After finishing a certain number of rounds, grant the user the ability to write their own question into the game
- Add an Express JS or Python Flask backend server with a database to make the app more scalable