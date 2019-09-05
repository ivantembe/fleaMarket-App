import { version } from '../../package.json';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';




export default ({ config, db }) => {
	let api = Router();
	api.get('/', (req, res) => {
		res.json({ version });
	});

	// LOGIN ROUTE
	api.post('/login',  (req, res) => {
		if(!req.body.email || !req.body.password){
			res.status(422).json({message:"missing parameter"});
			return
		}
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
		db.query('SELECT * FROM users WHERE user_email = ?', [user.user_email], (err, rows) => {
			if(rows && rows.length > 0){
				res.status(401).json({message:"E-Mail already exist"});
				return
			}
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


	// CREATE LIST - ROUTE
	api.post('/list', passport.authenticate('jwt', {session: false}), (req, res) => {
		if(!req.body.category || !req.body.condition || !req.body.offeringType || !req.body.listTitle || !req.body.listPrice || !req.body.listDescription || !req.body.city || !req.body.providerName || !req.body.providerTelephone){
			res.status(422).json({message:"missing parameter"});
			return
		}
		const list = {
			category: req.body.category,
			condition: req.body.condition,
			offeringType: req.body.offeringType,
			listTitle: req.body.listTitle,
			listPrice: req.body.listPrice,
			listDescription: req.body.listDescription,
			city: req.body.city,
			providerName: req.body.providerName,
			providerTelephone: req.body.providerTelephone,
			user_id:req.user.user_id
		}

		db.query('INSERT INTO lists SET ?', list, (err) => {
			if (err) {
                res.status(500).json({message:"list NOT created", err: err});
                return;
			} else  {
					res.json({list: list});
				}
		})
	});


	// GET ALL LISTS FROM DB - ROUTE
	api.get('/allLists', (req, res) => {
		db.query('SELECT * FROM lists', (err, rows) => {
			res.json({list: rows});
		})
	});

	// GET ALL LISTS FROM USERS IN DB - ROUTE
	api.get('/userLists', passport.authenticate('jwt', {session: false}), (req, res) => {
		const listUserID = req.user.user_id;
		db.query('SELECT * FROM lists WHERE user_id = ? ', [listUserID], (err, rows) => {
			if (err) {
				res.status(500).json({message: 'GET LISTS FAILED', ERROR: err})
				return;
			}
			res.json({list: rows});
		})
	});

	// // GET ALL LISTS WHERE CATEGORY IS -- All -- IN DB ROUTE
	// api.get('/allCategories', (req, res) => {
	// 	db.query('SELECT category FROM lists', (err, rows) => {
	// 		if (err) {
	// 			res.status(500).json({message: 'GET LISTS FAILED', ERROR: err})
	// 			return;
	// 		}
	// 		res.json({list: rows});
	// 	})
	// });


	// GET ALL LISTS WHERE CATEGORY IS -- CAR & BIKE -- IN DB ROUTE
	api.get('/carAndBike', (req, res) => {
		const categoryID = 'Car & Bike';
		db.query('SELECT * FROM lists WHERE category = ? ', [categoryID], (err, rows) => {
			if (err) {
				res.status(500).json({message: 'GET LISTS FAILED', ERROR: err})
				return;
			}
			res.json({list: rows});
		})
	});

	// GET ALL LISTS WHERE CATEGORY IS -- REAL STATE -- IN DB ROUTE
	api.get('/realState', (req, res) => {
		const categoryID = 'Real State';
		db.query('SELECT * FROM lists WHERE category = ? ', [categoryID], (err, rows) => {
			if (err) {
				res.status(500).json({message: 'GET LISTS FAILED', ERROR: err})
				return;
			}
			res.json({list: rows});
		})
	});

	// GET ALL LISTS WHERE CATEGORY IS -- MODE & BEAUTY -- IN DB ROUTE
	api.get('/modeAndBeauty', (req, res) => {
		const categoryID = 'Mode & Beauty';
		db.query('SELECT * FROM lists WHERE category = ? ', [categoryID], (err, rows) => {
			if (err) {
				res.status(500).json({message: 'GET LISTS FAILED', ERROR: err})
				return;
			}
			res.json({list: rows});
		})
	});

	// GET ALL LISTS WHERE CATEGORY IS -- ELECTRONICS -- IN DB ROUTE
	api.get('/electronics', (req, res) => {
		const categoryID = 'Electronics';
		db.query('SELECT * FROM lists WHERE category = ? ', [categoryID], (err, rows) => {
			if (err) {
				res.status(500).json({message: 'GET LISTS FAILED', ERROR: err})
				return;
			}
			res.json({list: rows});
		})
	});

	// DELETE LIST FROM USERS IN DB - ROUTE
	api.delete('/deleteList', passport.authenticate('jwt', {session: false}), (req, res) => {
		const listUserID = req.user.user_id;
		db.query('DELETE FROM lists WHERE user_id = ?', [listUserID], (err, results) => {
			console.log(err, results)
			if (err) {
				res.status(500)
				return;
			}
			db.query('SELECT * FROM lists WHERE user_id = ? ', [listUserID], (err, rows) => {
				if (err) {
					res.status(500).json({message: 'GET LISTS FAILED', ERROR: err})
					return;
				}
				res.json({list: rows});
			})
		})
	});


	// UPDATE LIST FROM USERS IN DB - ROUTE
	api.post('/updateList', passport.authenticate('jwt', {session: false}), (req, res) => {
		if(!req.body.category || !req.body.condition || !req.body.offeringType || !req.body.listTitle || !req.body.listPrice || !req.body.listDescription || !req.body.city || !req.body.providerName || !req.body.providerTelephone){
			res.status(422).json({message:"missing parameter"});
			return
		}
		const list = {
			category: req.body.category,
			condition: req.body.condition,
			offeringType: req.body.offeringType,
			listTitle: req.body.listTitle,
			listPrice: req.body.listPrice,
			listDescription: req.body.listDescription,
			city: req.body.city,
			providerName: req.body.providerName,
			providerTelephone: req.body.providerTelephone,
			user_id:req.user.user_id
		}

		db.query('UPDATE lists SET listTitle = ?,  WHERE user_id = ?', [list], (err) => {
			if (err) {
				res.status(500)
				return;
			}
			res.json({ results: 'List Updated'})
		})
	});

	return api;
}