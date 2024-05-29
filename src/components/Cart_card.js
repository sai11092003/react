// src/components/CartCard.js
import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartCard = ({ item, handleRemoveFromCart }) => {
  return (
    <div
      className="overflow-hidden shadow-lg w-4/5 justify-between m-5 items-center rounded-2xl flex flex-col md:flex-row cursor-pointer bg-white"
    >
      <Link to={`/burger/${item.foundBurger.id}`}>
        <img
          className="h-36 w-36"
          src="https://cdn.dribbble.com/userupload/9781333/file/original-020472ecdda18c6418862b973b0110de.jpg"
          alt="Mr-Burger"
        />
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-sm mb-2">{item.foundBurger.name}</div>
          {item.selectedIngredients && Object.keys(item.selectedIngredients).length > 0 ? (
            <div className="flex flex-wrap">
              {Object.keys(item.selectedIngredients).map((ingredient, idx, arr) => (
                <span key={idx} className="text-gray-700">
                  {ingredient} x{item.selectedIngredients[ingredient]}
                  {idx < arr.length - 1 && ','}&nbsp;
                </span>
              ))}
            </div>
          ) : (
            <div>No ingredients selected</div>
          )}
          <h1 className="font-bold text-lg">{item.totalPrice}₹</h1>
          <h1 className="text-md">x{item.quantity}</h1>
        </div>
      </Link>
      <button
        className="text-red-600 p-2"
        onClick={() => handleRemoveFromCart(item)}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default CartCard;
