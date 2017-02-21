import express from 'express';
import User from '../models/user';

const router = express.Router();

router.route('/')
	.get((req, res) => {
		User.find({}, (err, users) => {
			if(err)
				res.send(err)
			res.json(users);
		});
	})

export default router;