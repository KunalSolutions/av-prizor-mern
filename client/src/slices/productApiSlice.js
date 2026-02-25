import { PRODUCTS_URL, UPLOADS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // 🔹 Get All Products (pagination + search)
    getProducts: builder.query({
      query: ({ keyword = "", pageNumber = "" } = {}) => ({
        url: PRODUCTS_URL,
        params: { keyword, pageNumber },
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Product"],
    }),

    // 🔹 Get Single Product
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Product"],
    }),

    // 🔹 Get Top Deals
    getTopDeals: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/top-deals`,
      }),
      providesTags: ["Product"],
    }),

    // 🔹 Get Top Rated (numReviews > 50)
    getTopRatedProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/top-rated`,
      }),
      providesTags: ["Product"],
    }),

    // 🔹 Get Products by Category
    getProductsByCategory: builder.query({
      query: (category) => ({
        url: `${PRODUCTS_URL}/category/${category}`,
      }),
      providesTags: ["Product"],
    }),

    // 🔹 Create Product
    createProduct: builder.mutation({
      query: (data) => ({
        url: PRODUCTS_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    // 🔹 Update Product (FIXED VERSION)
    updateProduct: builder.mutation({
      query: ({ productId, ...data }) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    // 🔹 Delete Product
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    // 🔹 Upload Image
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: UPLOADS_URL,
        method: "POST",
        body: data,
      }),
    }),

    // 🔹 Create Review
    createReview: builder.mutation({
      query: ({ productId, ...data }) => ({
        url: `${PRODUCTS_URL}/${productId}/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    // 🔹 Toggle Active Status
    toggleProductStatus: builder.mutation({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}/toggle`,
        method: "PUT",
      }),
      invalidatesTags: ["Product"],
    }),

  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useGetTopDealsQuery,  
  useGetTopRatedProductsQuery,
  useGetProductsByCategoryQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useToggleProductStatusMutation,
} = productsApiSlice;