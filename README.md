# React Starter Pack [![Build Status](https://travis-ci.com/bpb27/react-starter-kit.svg?branch=master)](https://travis-ci.com/bpb27/react-starter-kit)
Everything you need to build and deploy a React app.

### About
1. React 17+, styled components, and React Testing Library
2. Configured with Webpack, Babel, and ESLint
3. Customizable component generation script
4. Small Node/Express server to deliver the app and add API endpoints
5. Setup for CI w/ Travis and deployment w/ Heroku

### Setup
1. `npm i`
2. `cd server`
3. `npm i`

### Development
1. `npm start`

### Running a build with the node server
1. `npm run build`
2. `cd server`
3. `npm run start`
4. Go to http://localhost:3000

### Deploying
This can be deployed to Heroku in just a few minutes.

1. [Login](https://id.heroku.com/login) or create an account
2. Create a [new app](https://dashboard.heroku.com/apps)
3. Go to the deploy section and connect to a Github repo
4. Enable automatic deploys of master

TODO: Figure out Heroku w/ split client and server

Go to the settings section to see your domain, and check out your app on the internet.

### Setup CI
You can easily add Travis to run all your tests for you every time you push.

1. [Login](https://travis-ci.com/) or create an account
2. Add your Github repo
3. Change the README badge at the very top to point to your app
4. In Heroku, go to the deploy tab and check the "Wait for CI" box

That's it. Travis is free for public repos.
