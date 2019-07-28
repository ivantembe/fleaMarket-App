import { version } from '../../package.json';
import { Router } from 'express';
import jwt from 'jsonwebtoken';




export default ({ config, db }) => {
	let api = Router();

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	// LOGIN ROUTE
	api.post('/login',  (req, res) => {
		if(!req.body.email || !req.body.password){
			res.status(422).json({message:"missing parameter"});
			return
		}
		// usually this would be a database call:
		db.query('SELECT * FROM users WHERE user_email = ?', [req.body.email], (err, rows) => {
			let user = null;
			if (err) {
				res.status(500)
				return;
			}
			if(rows && rows[0]){
				user = rows[0]
			}
			if( ! user ){
				res.status(401).json({message:"no such user found"});
				return
			} else if(user.user_password === req.body.password) {
				// from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
				var payload = {email: req.body.email};
				var token = jwt.sign(payload, config.secret);
				res.json({message: "ok", token: token, user:user});
			} else {
				res.status(401).json({message:"passwords did not match"});
			}
		})
	});

	// SIGNUP ROUTE
	api.post('/register', (req, res) => {
		if(!req.body.email || !req.body.password || !req.body.fname || !req.body.lname){
			res.status(422).json({message:"missing parameter"});
			return
		}
		const user = {
			user_fname: req.body.fname,
			user_lname: req.body.lname,
			user_email: req.body.email,
			user_password: req.body.password
		}
		// check if user already exists
		db.query('SELECT * FROM users WHERE user_email = ?', [user.user_email], (err, rows) => {
			if(rows && rows.length > 0){
				res.status(401).json({message:"E-Mail already exist"});
				return
			}
			// usually this would be a database call:
			db.query('INSERT INTO users SET ?', user, (err) => {
				if (err) {
					res.status(500)
					return;
				}
				if(user){
					var payload = {email: user.user_email};
					var token = jwt.sign(payload, config.secret);
					res.json({message: "ok", token: token});
				} else {
					res.status(500)
				}
			})
		})
	});


	// Create List Router
	api.post('/createList', (req, res) => {
		if(!req.body.category){
			res.status(422).json({message:"missing parameter"});
			return
		}
		const list = {
			category: req.body.category
		}
		console.log(list);

		db.query('INSERT INTO lists SET ?', list, (err) => {
			console.log(list)
			let user_id = null;
			if (err) {
				res.status(500).json({message: list});
				res.status(500).json({message:"list NOT created"});
				return;
			}
			if(list){
				var payload = {category: list.category};
				var token = jwt.sign(payload, config.secret);
				res.json({message: "ok", token: token, user: user_id});
			} else {
				res.status(500)
			}
		})
		
	// api.post('/createList', (req, res) => {
	// 	if(!req.body.category || !req.body.condition || !req.body.type || !req.body.title || !req.body.description || !req.body.price || !req.body.image || !req.body.city || !req.body.name || !req.body.telephone){
	// 		res.status(422).json({message:"missing parameter"});
	// 		return
	// 	}
	// 	const list = {
	// 		category: req.body.category,
	// 		condition: req.body.condition,
	// 		type: req.body.type,
	// 		title : req.body.title,
	// 		description: req.body.description,
	// 		price: req.body.price,
	// 		image: req.body.image,
	// 		city: req.body.city,
	// 		name: req.body.name,
	// 		telephone: req.body.telephone,
	// 	}

	// 	db.query('INSERT INTO lists SET ?', list, (err) => {
	// 		if (err) {
	// 			res.status(500).json({message:"list successfuly created"});
	// 			return;
	// 		}
	// 	})
		
		// db.query('SELECT * FROM users WHERE user_email = ?', [list.user_email], (err, rows) => {
		// 	if(rows && rows.length > 0){
		// 		res.status(401).json({message:"E-Mail already exist"});
		// 		return
		// 	}
		// 	// usually this would be a database call:
		// 	db.query('INSERT INTO users SET ?', list, (err) => {
		// 		if (err) {
		// 			res.status(500)
		// 			return;
		// 		}
		// 		if(list){
		// 			var payload = {email: list.user_email};
		// 			var token = jwt.sign(payload, config.secret);
		// 			res.json({message: "ok", token: token});
		// 		} else {
		// 			res.status(500)
		// 		}
		// 	})
		// })
	});

	return api;
}