import dotenv from 'dotenv';
dotenv.config();

const { NODE_ENV, PORT } = process.env;
import express from 'express';
import favicon from 'express-favicon';
import staticGzip from 'express-static-gzip';
import sslRedirect from 'heroku-ssl-redirect';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathDist = path.join(__dirname, '../dist');
const pathPublic = path.join(__dirname, '../public');
const port = PORT || 3000;
const isProd = NODE_ENV === 'prod';

const app = express();

// security headers
app.use(sslRedirect.default());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
// app.use(helmet.contentSecurityPolicy());
// app.use(helmet.noSniff());

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
