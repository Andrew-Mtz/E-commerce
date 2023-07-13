import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./header.scss";
import NavBar from "./menu/NavBar";
import Cart from "../cart/Cart";

const HeaderComponent = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [products, setProducts] = useState(0);
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  useEffect(() => {
    let totalQuantity = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.quantity;
    });
    setProducts(totalQuantity);
  }, [cartItems]);

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <img src="/images/logo.svg" alt="company logo" />
          </div>
          <NavBar />
        </div>
        <div className="header-right">
          <Cart
            isPopperOpen={isPopperOpen}
            setIsPopperOpen={setIsPopperOpen}
            products={products}
            cartItems={cartItems}
          />
          <div className="user-profile">
            <img
              className="user-photo"
              src="/images/image-avatar.png"
              alt="User profile photo"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
