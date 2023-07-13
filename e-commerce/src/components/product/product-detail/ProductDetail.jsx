import React from "react";
import PropTypes from "prop-types";
import "./productDetail.scss";

const ProductDetails = ({ title, name, desc, price, discount, oldPrice }) => {
  return (
    <>
      <h2 className="company-name">{title}</h2>
      <h1 className="product-title">{name}</h1>
      <p className="product-description">{desc}</p>
      <div className="price-container">
        <span className="current-price">${price}</span>
        {discount > 0 && <span className="discount">{discount}%</span>}
        {discount > 0 && <span className="original-price">${oldPrice}</span>}
      </div>
    </>
  );
};

ProductDetails.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
};

export default ProductDetails;
