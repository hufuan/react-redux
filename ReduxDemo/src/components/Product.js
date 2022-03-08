import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { cartActions } from "../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const cartItems = useSelector((state)=>state.cart.itemsList);
  const dispath = useDispatch();
  const addToCart = ()=>{
    dispath(cartActions.addToCart({
      name:name,
      id:id,
      price:price
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
