import { EyeIcon } from '@heroicons/react/24/outline';

const CardImage = ({ image, name }) => {
	return (
		<div className="relative w-full h-50  flex justify-center items-center">
			<img
				src={image}
				alt={name}
				className="w-45 h-40 object-fit"
			/>
			<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300'>
				<div className='gap-4 flex'>
					<div className='rounded-full bg-white p-3 transition-all hover:bg-slate-200'>
						<EyeIcon className='h-6 w-6 text-slate-700' strokeWidth={2} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardImage;
