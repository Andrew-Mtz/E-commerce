import React from "react";
import Product from "../../components/product/product";
import './productPage.scss'

const ProductPage = () => {
  return (
    <div className="container">
      <div className="product-container">
        <Product />
      </div>
    </div>
  );
};

export default ProductPage;
