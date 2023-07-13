import React from "react";
import PropTypes from "prop-types";
import "./productListImages.scss";

const ProductListImage = ({ imageNumber, setImageNumber }) => {
  return (
    <div className="small-images">
      <img
        src="/images/image-product-1-thumbnail.jpg"
        alt="Product Image"
        className={`small-image ${imageNumber === 1 ? "active" : ""}`}
        onClick={() => setImageNumber(1)}
      />
      <img
        src="/images/image-product-2-thumbnail.jpg"
        alt="Product Image"
        className={`small-image ${imageNumber === 2 ? "active" : ""}`}
        onClick={() => setImageNumber(2)}
      />
      <img
        src="/images/image-product-3-thumbnail.jpg"
        alt="Product Image"
        className={`small-image ${imageNumber === 3 ? "active" : ""}`}
        onClick={() => setImageNumber(3)}
      />
      <img
        src="/images/image-product-4-thumbnail.jpg"
        alt="Product Image"
        className={`small-image ${imageNumber === 4 ? "active" : ""}`}
        onClick={() => setImageNumber(4)}
      />
    </div>
  );
};

ProductListImage.propTypes = {
  imageNumber: PropTypes.number.isRequired,
  setImageNumber: PropTypes.func.isRequired,
};

export default ProductListImage;
