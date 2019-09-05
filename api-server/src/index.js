import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import api from './api';
import config from './config.json';
import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt'

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
	var jwtOptions = {}
	jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	jwtOptions.secretOrKey = config.secret;
	passport.use(new Strategy(jwtOptions, function(jwt_payload, next) {
		console.log('payload received', jwt_payload);
		db.query('SELECT * FROM users WHERE user_email = ?', [jwt_payload.email], (err, rows) => {
			let user = null
			if(rows && rows[0]){
				user = rows[0]
			}
			if (user) {
				jwt_payload.user = user
				next(null, user);
			} else {
				next(null, false);
			}
		})
	}));
	app.use(passport.initialize());

	// api router
	app.use('/api', api({ config, db }));

	app.listen(port, () => {
		console.log(`Started on port ${port}`);
	});
});

export default app;
