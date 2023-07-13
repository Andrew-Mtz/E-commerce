import React, { useState } from "react";
import Popper from "../popper/Popper";
import CartItem from "./cartItem/CartItem";
import PropTypes from "prop-types";
import "./cart.scss";

const Cart = ({ isPopperOpen, setIsPopperOpen, products, cartItems }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsPopperOpen(!isPopperOpen);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 500);
  };
  return (
    <div className={`cart-icon ${isActive ? "active" : ""}`}>
      <img onClick={handleClick} src="/images/icon-cart.svg" alt="Icon cart" />
      {products > 0 && <span className="badge">{products}</span>}
      {isPopperOpen && (
        <Popper
          title="Cart"
          renderContent={() => {
            if (cartItems.length === 0) {
              return (
                <span className="cart-item-empty-cart">
                  Your cart is empty.
                </span>
              );
            } else {
              return (
                <>
                  <ul className="cart-item-list">
                    {cartItems.map((item) => (
                      <CartItem item={item} key={item.id} />
                    ))}
                  </ul>
                  <button className="primary-btn cart-checkout-btn">
                    Checkout
                  </button>
                </>
              );
            }
          }}
        />
      )}
    </div>
  );
};

Cart.propTypes = {
  isPopperOpen: PropTypes.bool.isRequired,
  setIsPopperOpen: PropTypes.func.isRequired,
  products: PropTypes.number.isRequired,
  cartItems: PropTypes.array.isRequired,
};

export default Cart;
