import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { setCredentials } from '@slices/authSlice';
import { useRegisterMutation } from '@slices/userApiSlice';
import { toast } from 'react-toastify';

const RegisterScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [register, { isLoading }] = useRegisterMutation();
	const { userInfo } = useSelector((state) => state.auth);

	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get('redirect') || '/';

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error('Passwords do not match.');
			return;
		} else {
			try {
				const response = await register({ name, email, password }).unwrap();
				dispatch(setCredentials({ ...response }));
				navigate(redirect);
			} catch (error) {
				console.error(error);
				toast.error(error?.data?.message);
			}
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-white px-4">
  <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
    
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800">
        Create Account
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        Register to get started
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300 shadow-md"
      >
        {isLoading ? "Creating Account..." : "Register"}
      </button>
    </form>

    {/* Login Link */}
    <p className="mt-6 text-center text-sm text-gray-500">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-indigo-600 font-medium hover:underline"
      >
        Sign In
      </Link>
    </p>
  </div>
</div>
	);
};

export default RegisterScreen;
