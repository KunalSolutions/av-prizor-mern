import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '@components/Layout';
import ErrorScreen from '@screens/Error';
import HomeScreen from '@screens/Home';
import ProductDetails from '@screens/ProductDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorScreen />,
		children: [
			{
				index: true,
				element: <HomeScreen />,
			},
			{
				path: '/product/:id',
				element: <ProductDetails />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
