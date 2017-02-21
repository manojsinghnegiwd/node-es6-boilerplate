// import express
import express from 'express';
import bodyParser from 'body-parser';
import * as constants from './constants'; // import constants

const app = express(); // new server

// parse body params
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// start app on PORT
app.listen(constants.PORT, () => console.log(`Started server on ${constants.PORT}`));