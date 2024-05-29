import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartCard from "./Cart_card";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { clearcart, removeitem } from "../../utils/Cartslice";
const Cart = () => {
  const cartItems = useSelector((store) => store.Cart.cartitems);
  console.log(cartItems);
const dispatch=useDispatch();
  const handleRemoveFromCart = (item) => {
    console.log("Remove item:", item);
    dispatch(removeitem(item))
  };
 const findprice=cartItems.reduce((acc, item) =>{
    return acc+(item.totalPrice*item.quantity);
},0)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {cartItems.length ? (
        <>
          <button
            className="rounded-md text-white bg-red-600 absolute top-0 right-0 p-2 mb-5"
            onClick={() => {
              dispatch(clearcart());
            }}
          >
            Clear Cart
          </button>
          <div className="flex flex-col items-center mb-20 p-5 w-full">
            {cartItems.map((item, index) => (
              <CartCard
                key={index}
                item={item}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </div>
          <div className="flex absolute bottom-5 items-center right-5 m-4">
            <h1 className="text-bold font-bold m-4">TOTAL PRICE: {findprice}₹</h1>
            <button className="p-4 bg-red-700 rounded-lg text-white">checkout</button>
          </div>
        </>
      ) : (
        <h1 className="text-red-500 font-bold text-5xl">No items</h1>
      )}
    </div>
  );
};

export default Cart;
