import { Link } from 'react-router-dom';

const MenuItem = ({ url, label, icon: Icon }) => {
	return (
		<Link
			to={url}
			className='flex items-center gap-1 text-sm font-semibold text-black hover:text-indigo-500 transition-all'>
			<Icon className='h-4 w-4 text-indigo-500' strokeWidth={2} />
			{label}
		</Link>
	);
};

export default MenuItem;
