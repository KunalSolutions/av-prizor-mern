import express from 'express';

import {
	authUser,
	deleteUser,
	getUserById,
	getUserProfile,
	getUsers,
	logoutUser,
	registerUser,
	updateUser,
	updateUserProfile,
	createUser,
} from '#controllers/user.controller.js';
import { admin, protect } from '#middlewares/auth.middleware.js';

const router = express.Router();

router.route('/')
	.post(protect, admin, createUser)
	.get(protect, admin, getUsers);

router.post('/login', authUser);
router.post('/logout', logoutUser);
router.post('/register', registerUser);

router.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

router.route('/:id')
	.delete(protect, admin, deleteUser)
	.get(protect, getUserById)
	.put(protect, admin, updateUser);


export default router;
