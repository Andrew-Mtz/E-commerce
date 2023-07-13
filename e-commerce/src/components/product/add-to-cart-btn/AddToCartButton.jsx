import React from "react";
import PropTypes from "prop-types";
import "./addToCartButton.scss";

const AddToCartButton = ({ addToCart }) => {
  return (
    <button className="primary-btn add-to-cart-btn" onClick={addToCart}>
      <img src="/images/icon-cart-white.svg" />
      Add to cart
    </button>
  );
};

AddToCartButton.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default AddToCartButton;
