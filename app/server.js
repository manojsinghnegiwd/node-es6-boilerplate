// import express
import express from 'express';
import * as constants from './constants'; // import constants

const app = express(); // new server

// start app on PORT
app.listen(constants.PORT, () => console.log(`Started server on ${constants.PORT}`));