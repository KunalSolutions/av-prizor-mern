import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import CardImage from "./CardImage";
import Rating from "./Rating";
import products from "../../data/product.data";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "@slices/cartSlice";

   

const Product = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, qty: 1 }));
    navigate("/cart");
    };

  return (
    <>
    </>
  );
};

export default Product;
