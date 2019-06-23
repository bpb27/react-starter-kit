# React Starter Pack
Everything you need to build and deploy a React app.

### About
1. WebPack + Babel with dev server and hot module reload
2. Customizable ESLint pre-configured for React
3. Mini Node/Express server for serving your app
4. Setup for Jest/Enzyme unit tests
5. Customizable component generation script
6. Setup for SCSS

### Setup
1. `npm i`

### Commands
1. Dev server: `npm run dev`
2. Prod build: `npm run build`
3. Generate component: `npm run generate`
4. Unit testing: `npm run test`
5. Node server: `npm start`

### Deploying
This can be deployed to Heroku in just a few minutes.

1. [Login](https://id.heroku.com/login) or create an account
2. Create a [new app](https://dashboard.heroku.com/apps)
3. Go to the deploy section and connect to a Github repo
4. Enable automatic deploys of master

That's it. Heroku will automatically know what to do when it sees the node server, `npm build`, and `npm start`.

Go to the settings section to see your domain, and check out your app on the internet.
