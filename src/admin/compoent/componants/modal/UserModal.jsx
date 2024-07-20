import React from 'react';

const UserModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-4">User Details</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.fname}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <h3 className="text-xl mt-4 mb-2">Cart Items</h3>
        <p className='font-bold'>Number of cart:{user.cart.length}</p>
        {user.cart && user.cart.length > 0 && (
          <>
           
            
            {user.cart.map((item, index) => (
              <div key={index} className="mb-2 border border-gray-400 p-3">
                <p><strong>Product:</strong> {item.name}</p>
                <p><strong>Quantity:</strong> {item.Qty}</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
                <p><strong>Total:</strong>₹{(item.price * item.Qty)}</p>
              </div>
            ))}
          </>
        )}
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