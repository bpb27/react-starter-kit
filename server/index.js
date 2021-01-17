require('dotenv').config();
const { NODE_ENV, PORT } = process.env;

const express = require('express');
const favicon = require('express-favicon');
const staticGzip = require('express-static-gzip');
const sslRedirect = require('heroku-ssl-redirect').default;
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');

const app = express();
const port = PORT || 3000;
const isProd = NODE_ENV === 'prod';
const pathDist = path.join(__dirname, '../dist');
const pathPublic = path.join(__dirname, '../public');

// security headers
app.use(sslRedirect());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
// app.use(helmet.contentSecurityPolicy()); // need to whitelist a number of scripts and styles
// app.use(helmet.noSniff()); // seems to cause problems with react suspense js snippets

// serve static assets in dist and public folders
app.use(favicon(`${pathPublic}/favicon.ico`));
app.use(staticGzip(pathDist));
app.use(staticGzip(pathPublic));

// disable CORS restriction in dev mode
if (!isProd) app.use(cors());

// health check route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// deliver react app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(`${pathDist}/index.html`));
});

// start app
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
