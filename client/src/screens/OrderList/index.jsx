import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Alert from '@components/Alert';
import Loader from '@components/Loader';

import {
	useGetOrdersQuery,
	useUpdateOrderToPaidMutation,
	useUpdateOrderToDeliveredMutation,
} from '@slices/orderApiSlice';

const OrderListScreen = () => {
	const { data: orders = [], isLoading, error, refetch } =
		useGetOrdersQuery();

	const [updateOrderToPaid] = useUpdateOrderToPaidMutation();
	const [updateOrderToDelivered] =
		useUpdateOrderToDeliveredMutation();

	// Handle Paid Dropdown
	const handlePaidChange = async (order) => {
		if (order.isPaid) return;

		try {
			await updateOrderToPaid(order._id).unwrap();
			toast.success('Order marked as paid');
			refetch();
		} catch (error) {
			toast.error(error?.data?.message || error?.error);
		}
	};

	// Handle Delivered Dropdown
	const handleDeliveredChange = async (order) => {
		if (order.isDelivered) return;

		try {
			await updateOrderToDelivered(order._id).unwrap();
			toast.success('Order marked as delivered');
			refetch();
		} catch (error) {
			toast.error(error?.data?.message || error?.error);
		}
	};

	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8'>

				<div className='flex justify-between'>
					<h1 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
						All Orders
					</h1>
				</div>

				{isLoading ? (
					<Loader />
				) : error ? (
					<Alert type='error'>
						{error?.data?.message || error?.message}
					</Alert>
				) : (
					<div className='mt-8 flow-root'>
						<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
							<div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>

								<table className='min-w-full divide-y divide-gray-300'>

									<thead>
										<tr>
											<th className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>
												ID
											</th>
											<th className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
												User
											</th>
											<th className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
												Date
											</th>
											<th className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
												Total
											</th>
											<th className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
												Paid
											</th>
											<th className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
												Delivered
											</th>
											<th className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
												<span className='sr-only'>Details</span>
											</th>
										</tr>
									</thead>

									<tbody className='divide-y divide-gray-200 bg-white'>
										{orders.map((order) => (
											<tr key={order._id}>

												<td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>
													{order._id}
												</td>

												<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
													{order.user?.name}
												</td>

												<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
													{new Date(order.createdAt).toLocaleDateString()}
												</td>

												<td className='whitespace-nowrap px-3 py-4 text-sm font-semibold text-slate-900'>
													₹{order.totalPrice}
												</td>

												{/* PAID DROPDOWN */}
												<td className='whitespace-nowrap px-3 py-4 text-sm'>
													<select
														value={order.isPaid ? 'Paid' : 'Not Paid'}
														onChange={() => handlePaidChange(order)}
														className={`rounded-md px-2 py-1 text-sm font-medium shadow-sm ring-inset ${order.isPaid
																? 'bg-green-50 text-green-700 outline-none border-none'
																: 'bg-red-50 text-red-700 ring-red-300'
															}`}
													>
														<option>Paid</option>
														<option>Not Paid</option>
													</select>
												</td>

												{/* DELIVERED DROPDOWN */}
												<td className='whitespace-nowrap px-3 py-4 text-sm'>
													<select
														value={order.isDelivered ? 'Delivered' : 'Not Delivered'}
														onChange={() => handleDeliveredChange(order)}
														className={`rounded-md px-2 py-1 text-sm font-medium shadow-sm ring-1 ring-inset ${order.isDelivered
																? 'bg-green-50 text-green-700 ring-green-300'
																: 'bg-yellow-50 text-yellow-700 ring-yellow-300'
															}`}
													>
														<option>Delivered</option>
														<option>Not Delivered</option>
													</select>
												</td>

												<td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
													<Link
														to={`/order/${order._id}`}
														className='text-indigo-600 hover:text-indigo-900'
													>
														Details
													</Link>
												</td>

											</tr>
										))}
									</tbody>

								</table>

							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default OrderListScreen;
