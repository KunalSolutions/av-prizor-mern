import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCreateUserMutation } from '@slices/userApiSlice';

const UserCreate = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);

	const [createUser, { isLoading }] = useCreateUserMutation();

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			await createUser({
				name,
				email,
				password,
				isAdmin,
			}).unwrap();

			toast.success('User created successfully');
			navigate('/admin/user-list');
		} catch (error) {
			toast.error(error?.data?.message || error?.error);
		}
	};

	return (
		<div className='max-w-lg mx-auto mt-10 bg-white p-8 shadow rounded'>
			<h2 className='text-2xl font-bold mb-6'>Create User</h2>

			<form onSubmit={submitHandler}>
				<div className='mb-4'>
					<label>Name</label>
					<input
						type='text'
						className='w-full border p-2 rounded'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>

				<div className='mb-4'>
					<label>Email</label>
					<input
						type='email'
						className='w-full border p-2 rounded'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>

				<div className='mb-4'>
					<label>Password</label>
					<input
						type='password'
						className='w-full border p-2 rounded'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<div className='mb-4 flex items-center gap-2'>
					<input
						type='checkbox'
						checked={isAdmin}
						onChange={(e) => setIsAdmin(e.target.checked)}
					/>
					<label>Is Admin</label>
				</div>

				<button
					type='submit'
					className='bg-indigo-600 text-white px-4 py-2 rounded'>
					{isLoading ? 'Creating...' : 'Create User'}
				</button>
			</form>
		</div>
	);
};

export default UserCreate;
