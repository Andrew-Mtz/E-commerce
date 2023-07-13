import React from "react";
import PropTypes from "prop-types";
import "./quantitySelector.scss";

const QuantitySelector = ({ count, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="quantity-selector">
      <img
        className="btn-quantity-selector"
        src="/images/icon-minus.svg"
        onClick={decreaseQuantity}
      />
      <span className="quantity">{count}</span>
      <img
        className="btn-quantity-selector"
        src="/images/icon-plus.svg"
        onClick={increaseQuantity}
      />
    </div>
  );
};

QuantitySelector.propTypes = {
  count: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default QuantitySelector;
