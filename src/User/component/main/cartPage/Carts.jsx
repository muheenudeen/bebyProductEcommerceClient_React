import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../navbar/NavbarLink';
import Footer from '../../../Pages/footers/Footer';

const Carts = ({ cart = [], setCart }) => {
  useEffect(() => {

  }, []);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncrement = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
  };

  const handleDecrement = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCart(newCart);
    }
  };

  const handleDelete = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
  
  <>
  <Navbar/>
  
    <div className="p-4">
      
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {cart.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-lg flex items-center">
            <img src={item.url} className="w-24 h-24 object-cover rounded-lg mr-4" alt={item.description} />
            <div className="flex-grow">
              <p className="text-lg font-semibold">{item.description}</p>
              <p className="text-gray-700">${item.price} x {item.quantity}</p>
              <div className="flex items-center mt-2">
                <button onClick={() => handleDecrement(index)} className="text-sm bg-gray-300 px-2 py-1 rounded-md mr-2">-</button>
                <span className="text-lg">{item.quantity}</span>
                <button onClick={() => handleIncrement(index)} className="text-sm bg-gray-300 px-2 py-1 rounded-md ml-2">+</button>
                <button onClick={() => handleDelete(index)} className="text-sm bg-red-500 text-white px-2 py-1 rounded-md ml-2">Delete</button>
              </div>
            </div>
            <p className="text-lg font-bold">${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">Total: ${totalPrice}</p>
      </div>
      <Link to="/paymentform">
        <button className="bg-yellow-900 p-3 text-white">Payment</button>
      </Link>
      <Footer/>
      
    </div>
    </>
  );
};

export default Carts;
