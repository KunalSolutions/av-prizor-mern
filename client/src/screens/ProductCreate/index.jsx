import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateProductMutation } from "@slices/productApiSlice";

const ProductCreate = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    content: "",
    image: "",
    section: "",
    category: "",
    subcategory: "",
    brand: "",
    price: "",
    offerPrice: "",
    countInStock: "",
    isTopDeal: false,
    isBestSeller: false,
    isActive: true,
  });

  const [variants, setVariants] = useState([]);
  const [hasVariants, setHasVariants] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Add new variant row
  const addVariant = () => {
    setVariants([
      ...variants,
      { size: "", price: "", offerPrice: "", countInStock: "" },
    ]);
  };

  const handleVariantChange = (index, e) => {
    const updated = [...variants];
    updated[index][e.target.name] = e.target.value;
    setVariants(updated);
  };

  const removeVariant = (index) => {
    const updated = variants.filter((_, i) => i !== index);
    setVariants(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct({
        ...formData,
        price: Number(formData.price),
        offerPrice: Number(formData.offerPrice),
        countInStock: Number(formData.countInStock),
        variants: hasVariants
          ? variants.map((v) => ({
              size: v.size,
              price: Number(v.price),
              offerPrice: Number(v.offerPrice),
              countInStock: Number(v.countInStock),
            }))
          : [],
      }).unwrap();

      toast.success("Product created successfully");
      navigate("/admin/productlist");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Create Product</h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Basic Info */}
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Short Description"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <textarea
            name="content"
            placeholder="Full Content"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          {/* Category Info */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="section"
              placeholder="Section"
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="subcategory"
              placeholder="Subcategory"
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
          </div>

          {/* Variant Toggle */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={hasVariants}
              onChange={() => setHasVariants(!hasVariants)}
            />
            <label>This product has size variants (TV etc.)</label>
          </div>

          {/* Normal Product Pricing */}
          {!hasVariants && (
            <div className="grid grid-cols-3 gap-4">
              <input
                type="number"
                name="price"
                placeholder="Price"
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="offerPrice"
                placeholder="Offer Price"
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="countInStock"
                placeholder="Stock"
                onChange={handleChange}
                className="border p-2 rounded"
              />
            </div>
          )}

          {/* Variants Section */}
          {hasVariants && (
            <div className="space-y-4">
              <button
                type="button"
                onClick={addVariant}
                className="bg-gray-200 px-4 py-2 rounded"
              >
                + Add Variant
              </button>

              {variants.map((variant, index) => (
                <div key={index} className="grid grid-cols-4 gap-3">
                  <input
                    type="text"
                    name="size"
                    placeholder="Size (32, 43...)"
                    value={variant.size}
                    onChange={(e) => handleVariantChange(index, e)}
                    className="border p-2 rounded"
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={variant.price}
                    onChange={(e) => handleVariantChange(index, e)}
                    className="border p-2 rounded"
                  />
                  <input
                    type="number"
                    name="offerPrice"
                    placeholder="Offer Price"
                    value={variant.offerPrice}
                    onChange={(e) => handleVariantChange(index, e)}
                    className="border p-2 rounded"
                  />
                  <input
                    type="number"
                    name="countInStock"
                    placeholder="Stock"
                    value={variant.countInStock}
                    onChange={(e) => handleVariantChange(index, e)}
                    className="border p-2 rounded"
                  />

                  <button
                    type="button"
                    onClick={() => removeVariant(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Flags */}
          <div className="flex gap-6">
            <label>
              <input
                type="checkbox"
                name="isTopDeal"
                onChange={handleChange}
              />{" "}
              Top Deal
            </label>

            <label>
              <input
                type="checkbox"
                name="isBestSeller"
                onChange={handleChange}
              />{" "}
              Best Seller
            </label>

            <label>
              <input
                type="checkbox"
                name="isActive"
                defaultChecked
                onChange={handleChange}
              />{" "}
              Active
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              {isLoading ? "Creating..." : "Create Product"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProductCreate;