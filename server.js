const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const staticGzip = require('express-static-gzip');

const app = express();
const pathDist = path.join(__dirname, './dist');
const pathPublic = path.join(__dirname, './public');
const port = process.env.PORT || 3000;

// serve gzipped static assets in dist and public folders
app.use(favicon(`${pathPublic}/favicon.ico`));
app.use(staticGzip(pathDist));
app.use(staticGzip(pathPublic));

// health route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// deliver react app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(`${pathDist}/index.html`));
});

app.listen(port, () => console.log(`running on port ${port}`)); // eslint-disable-line no-console
