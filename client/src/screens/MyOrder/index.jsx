import { Link } from 'react-router-dom'
import { useGetMyOrdersQuery } from '../../slices/orderApiSlice'
import Loader from '../../components/Loader'
import Alert from '../../components/Alert'

const MyOrdersScreen = () => {
  const { data: orders, isLoading, error } = useGetMyOrdersQuery()

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8'>
        
        <h1 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
          My Orders
        </h1>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Alert type='error'>
            {error?.data?.message || error?.error}
          </Alert>
        ) : orders.length === 0 ? (
          <p className='mt-6 text-gray-500'>No orders found.</p>
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
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>

                        <td className='whitespace-nowrap px-3 py-4 text-sm font-semibold text-slate-900'>
                          ₹{order.totalPrice}
                        </td>

                        <td className='whitespace-nowrap px-3 py-4 text-sm'>
                          {order.isPaid ? (
                            <span className='rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
                              Paid
                            </span>
                          ) : (
                            <span className='rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20'>
                              Not Paid
                            </span>
                          )}
                        </td>

                        <td className='whitespace-nowrap px-3 py-4 text-sm'>
                          {order.isDelivered ? (
                            <span className='rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
                              Delivered
                            </span>
                          ) : (
                            <span className='rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20'>
                              Not Delivered
                            </span>
                          )}
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
  )
}

export default MyOrdersScreen
