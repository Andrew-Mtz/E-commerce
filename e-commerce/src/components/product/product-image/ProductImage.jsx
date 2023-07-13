import React from "react";
import PropTypes from "prop-types";
import ProductListImage from "../product-list-images/ProductListImages";
import "./productImage.scss";

const ProductImage = ({ imageNumber, setImageNumber }) => {
  return (
    <div className="product-images">
      <img
        src={`/images/image-product-${imageNumber}.jpg`}
        alt="Product Image"
        className="large-image"
      />
      <ProductListImage
        imageNumber={imageNumber}
        setImageNumber={setImageNumber}
      />
    </div>
  );
};

ProductImage.propTypes = {
  imageNumber: PropTypes.number.isRequired,
  setImageNumber: PropTypes.func.isRequired,
};

export default ProductImage;
