import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  //const quantity = 5;
  const quantity = useSelector(state=>state.cart.totalQuantity);
  const dispath = useDispatch();
  const showCart = ()=>{
    dispath(cartActions.setShowCart());
    console.log("add to cart");
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} items</h3>
    </div>
  );
};

export default Cart;
