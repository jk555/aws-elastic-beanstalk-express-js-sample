const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('AWS DevOps Continuous Delivery Pipeline Demo(Setup Git repo, deply web app, create build, create build project, delivery pipeline, test), manual review added (09/21/2022)!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
