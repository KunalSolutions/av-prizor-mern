import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import connectDB from '#config/db.config.js';
import productRoutes from '#routes/product.route.js';

dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(morgan('dev'));

app.use('/api/v1/products', productRoutes);

app.get('/', (req, res) => {
	res.json({
		message: 'API is running...',
	});
});

app.listen(port, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${port}.`.cyan.bold
	);
});
