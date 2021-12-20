import express from 'express';
import bodyParser from 'body-parser';

import { getDifference } from './interfaces/controllers';
import { expressCallback } from './frameworks';

require('dotenv').config();

const apiRoot = process.env.CALCULATOR_API_ROOT || '/calc/api/v1';
const port = process.env.CALCULATOR_API_PORT || 8080;
const app = express();

app.use(bodyParser.json()); // application/json
app.use(bodyParser.urlencoded({ extended: true })); // application/x-www-form-urlencoded

app.get(apiRoot, (req, res) => {
  res.send('API root for calculator service');
});
app.get(`${apiRoot}/sub`, expressCallback(getDifference));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;