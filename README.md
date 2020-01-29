# React Starter Pack [![Build Status](https://travis-ci.com/bpb27/react-starter-kit.svg?branch=master)](https://travis-ci.com/bpb27/react-starter-kit)
Everything you need to build and deploy a React app.

### About
1. WebPack + Babel with dev server and hot module reload
2. Mini Node/Express server for serving your app
3. Customizable ESLint pre-configured for React
4. Customizable component generation script
5. Setup for Jest/Enzyme unit tests
6. Setup for SCSS
7. Setup for CI w/ Travis and deployment w/ Heroku

### Setup
`npm i`

### Development
`npm run dev`

### Running a build with the node server
`npm run build`
`npm run start`

### Additional
1. Unit testing: `npm run test`
2. Generate component: `npm run generate`

### Deploying
This can be deployed to Heroku in just a few minutes.

1. [Login](https://id.heroku.com/login) or create an account
2. Create a [new app](https://dashboard.heroku.com/apps)
3. Go to the deploy section and connect to a Github repo
4. Enable automatic deploys of master

That's it. Heroku will automatically know what to do when it sees the node server, `npm build`, and `npm start`.

Go to the settings section to see your domain, and check out your app on the internet.

### Setup CI
You can easily add Travis to run all your tests for you every time you push.

1. [Login](https://travis-ci.com/) or create an account
2. Add your Github repo
3. Change the README badge at the very top to point to your app
4. In Heroku, go to the deploy tab and check the "Wait for CI" box

That's it. Travis is free for public repos.
