import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { setCredentials } from '@slices/authSlice';
import { useLoginMutation } from '@slices/userApiSlice';

const LoginScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get('redirect') || '/';

	const [login, { isLoading }] = useLoginMutation();
	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await login({ email, password }).unwrap();
			dispatch(setCredentials({ ...response }));
			navigate(redirect);
		} catch (error) {
			console.error(error);
			toast.error(error?.data?.message);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-white px-4">
  <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
    
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800">
        Welcome 
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        Login to access your account
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
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
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300 shadow-md"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </form>

    {/* Register Link */}
    <p className="mt-6 text-center text-sm text-gray-500">
      Not a customer?{" "}
      <Link
        to="/register"
        className="text-indigo-600 font-medium hover:underline"
      >
        Create an account
      </Link>
    </p>
  </div>
</div>
	);
};

export default LoginScreen;
