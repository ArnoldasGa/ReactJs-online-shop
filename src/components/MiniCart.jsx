import React, { useState } from 'react';
import { useCart } from './CartContext'; // Import the useCart hook

const MiniCart = () => {
  const { cart, removeFromCart, updateItemQuantity } = useCart(); // Access cart and functions from context
  const [isOpen, setIsOpen] = useState(false); // State to track if the dropdown is open or closed

  const toggleCart = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  // Handle updating the quantity
  const handleQuantityChange = (itemId, action) => {
    if (action === 'increase') {
      updateItemQuantity(itemId, 1); // Increase quantity by 1
    } else if (action === 'decrease') {
      updateItemQuantity(itemId, -1); // Decrease quantity by 1
    }
  };

  return (
    <div className="dropdown relative">
      <button className="btn normal-case ml-2" onClick={toggleCart}>
        <span>
          <li className="block mt-4 lg:inline-block lg:mt-0">
            <a href="#" className="relative flex">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 p-0 m-0 text-white font-mono text-sm text-center">
                  {cart.length}
                </span>
              )}
            </a>
          </li>
        </span>
      </button>

      {isOpen && (
        <div className="dropdown-content absolute bg-white border shadow-md p-4 rounded-md right-0 max-w-xs">
          {cart.length > 0 ? (
            <>
                        <ul>
              <li>
                <div className="flex justify-between items-center w-full font-bold">
                  <span className="flex-1">Produktas</span>
                  <span className="ml-2 text-right">Kiekis</span>
                  <span className="ml-2 text-right">Kaina</span>
                </div>
              </li>
              {cart.map((item) => (
                <li key={item.id}>
                  <div className="flex justify-between items-center w-full">
                    <span className="flex-1">{item.name}</span>
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 text-sm bg-gray-200 rounded-full"
                        onClick={() => handleQuantityChange(item.id, 'decrease')}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="px-2 py-1 text-sm bg-gray-200 rounded-full"
                        onClick={() => handleQuantityChange(item.id, 'increase')}
                      >
                        +
                      </button>
                    </div>
                    <span className="ml-2 text-right">{item.price * item.quantity}€</span>
                    <button
                      className="ml-2 text-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      X
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button type="button" class="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-blue-600 bg-blue-500 hover:bg-blue-400">Pirkti</button>
            </>
          ) : (
            <p>Tusčia</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MiniCart;
