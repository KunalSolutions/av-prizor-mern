import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCreateProductMutation } from '@slices/productApiSlice';


const ProductCreate = () => {

   const [createProduct, { isLoading }] = useCreateProductMutation();

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [rating, setRating] = useState('');
  const [numReviews, setNumReviews] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await createProduct({
      name,
      price: Number(price),
      description,
      image,
      category,
      brand,
      countInStock: Number(countInStock),
      rating: Number(rating),
      numReviews: Number(numReviews),
      content,
    }).unwrap();

    toast.success('Product created successfully');
    navigate('/admin/productlist');
  } catch (error) {
    toast.error(error?.data?.message || error?.error);
  }

    // 🔜 Next step we connect backend API
    navigate('/admin/productlist');
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Create Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              required
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              value={image}
              onChange={(e)=>setImage(e.target.value)}
              required
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              type="text"
              value={brand}
              onChange={(e)=>setBrand(e.target.value)}
              required
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              required
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Count In Stock
            </label>
            <input
              type="number"
              value={countInStock}
              onChange={(e)=>setCountInStock(e.target.value)}
              required
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              value={rating}
              onChange={(e)=>setRating(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Reviews
            </label>
            <input
              type="number"
              value={numReviews}
              onChange={(e)=>setNumReviews(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              rows="3"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              required
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              rows="6"
              value={content}
              onChange={(e)=>setContent(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div className="flex justify-end">
            <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
            >
            {isLoading ? 'Creating...' : 'Create Product'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
