import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    if (user?.id) {
      axios.get(`http://localhost:8000/users/${user.id}`)
        .then(res => {
          setOrderList(res.data.order);
        })
        .catch(error => {
          console.error('Error fetching orders:', error);
        });
    }
  }, [user?.id]);

  return (

   
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-4">User Details</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.fname}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <h3 className="text-xl mt-4 mb-2">Orders</h3>
        
        {orderList.map((item, index) => (
          
          <div key={index} className="mb-2 border border-gray-400 p-3">
                      
            <p><strong>Order ID:</strong> {item.id}</p>
            {item.orderDetails && item.orderDetails.length > 0 && (
              item.orderDetails.map((product, productIndex) => (
                <div key={productIndex} className="mt-2 p-2 border border-gray-300 rounded">
                  <p><strong>Product Name:</strong> {product.description}</p>
                  <p><strong>Quantity:</strong> {product.quantity}</p>
                  <p><strong>Price:</strong> ₹{product.price}</p>
                </div>
              ))
            )}
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>ATM number:</strong> {item.atmNumber}</p>
            <p><strong>CVV:</strong> {item.cvv}</p>
            <p><strong>Phone:</strong> {item.phone}</p>
          </div>
        ))}
        
        <button 
          onClick={onClose}
          className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
