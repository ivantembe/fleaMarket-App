import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import api from './api';
import config from './config.json';
//  TODO import passport

let app = express();
const port = process.env.PORT || config.port

// logger
app.use(morgan('dev'));

// CORS
app.use(cors());

// parse post requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// connect to db
initializeDb( db => {

	// TODO auth passport strategy


	// api router
	app.use('/api', api({ config, db }));

	app.listen(port, () => {
		console.log(`Started on port ${port}`);
	});
});

export default app;
