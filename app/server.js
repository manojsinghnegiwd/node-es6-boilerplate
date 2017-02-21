// import express
import express from 'express';
import bodyParser from 'body-parser';
import * as constants from './constants'; // import constants
import routes from './routes';

const app = express(); // new server

// parse body params
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

// start app on PORT
app.listen(constants.PORT, () => console.log(`Started server on ${constants.PORT}`));