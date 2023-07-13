import React from "react";
import PropTypes from "prop-types";
import "./cartItem.scss";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
  };
  return (
    <li className="cart-item-product" key={item.id}>
      <img
        className="cart-item-product-img"
        src="/images/image-product-1-thumbnail.jpg"
        alt="Product image"
      />
      <div className="cart-item-product-content">
        <span className="cart-item-product-name">{item.name}</span>
        <span className="cart-item-product-price">${item.price}</span>
        <span>x</span>
        <span className="cart-item-product-quantity">{item.quantity}</span>
        <span className="cart-item-product-amount">
          ${item.price * item.quantity}
        </span>
      </div>
      <img
        onClick={deleteProduct}
        className="cart-item-trash-icon"
        src="/images/icon-delete.svg"
        alt="Trash icon"
      />
    </li>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
