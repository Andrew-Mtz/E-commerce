import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./product.scss";
import ProductImage from "./product-image/ProductImage";
import ProductDetails from "./product-detail/ProductDetail";
import QuantitySelector from "./quantity-selector/QuantitySelector";
import AddToCartButton from "./add-to-cart-btn/AddToCartButton";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serializedProduct = searchParams.get("data");
  const product = JSON.parse(decodeURIComponent(serializedProduct));
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [imageNumber, setImageNumber] = useState(product.id);

  const decreaseQuantity = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseQuantity = () => {
    setCount(count + 1);
  };

  const addToCart = () => {
    if (count > 0) {
      dispatch({ type: "ADD_TO_CART", payload: { product, quantity: count } });
      setCount(0);
    }
  };

  return (
    <>
      <ProductImage
        imageNumber={imageNumber}
        setImageNumber={setImageNumber}
      />
      <div className="product-details">
        <ProductDetails
          title={product.title}
          name={product.name}
          desc={product.description}
          price={product.price}
          discount={product.discount}
          oldPrice={product.oldPrice}
        />
        <div className="quantity-to-cart">
          <QuantitySelector
            count={count}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
          <AddToCartButton addToCart={addToCart} />
        </div>
      </div>
    </>
  );
};

export default Product;
