import Alert from '@components/Alert';
import CategorySection from '@components/Category';
import HeroSection from '@components/HeroSection';
import Loader from '@components/Loader';
import NewArrival from '@components/NewArrival';
import Paginate from '@components/Paginate';
import ProductCard from '@components/ProductCard';
import ServiceSection from '@components/Service';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useGetProductsQuery } from '@slices/productApiSlice';
import { useNavigate, useParams } from 'react-router-dom';

const HomeScreen = () => {
	const { pageNumber, keyword } = useParams();

	const navigate = useNavigate();

	const { data, isLoading, isError, error } = useGetProductsQuery({
		pageNumber,
		keyword,
	});

	return (
		<div>
		<HeroSection id="#products" />

		<section className='bg-white'>
			
			<div className='mx-auto max-w-7xl px-3 py-10 sm:px-6 lg:px-8'>
				{isLoading ? (
					<Loader />
				) : isError ? (
					<Alert type='error'>{error?.data?.message || error?.error}</Alert>
				) : (
					<>
						<div className='flex items-center gap-2'>
							{keyword && (
								<button onClick={() => navigate('/')} type='button'>
									<span className='sr-only'>Go back</span>
									<ArrowLeftIcon className='mr-1 h-5 w-5 text-slate-900' />
								</button>
							)}
							<h1 className='text-2xl font-bold text-slate-900'>
								{keyword ? `Search Results for ${keyword}` : 'Latest Products'}
							</h1>
						</div>
						<div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
							{data.products.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
						</div>
					</>
				)}
				<Paginate pages={data?.pages} page={data?.page} />
			</div>
		</section>
		{/* <CategorySection /> */}
		{/* <NewArrival /> */}
		<ServiceSection />
		</div>
	);
};

export default HomeScreen;
