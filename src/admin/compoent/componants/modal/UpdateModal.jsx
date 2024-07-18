import React, { useState } from 'react';

const UpdateModal = ({ show, onClose, product, onUpdate }) => {
  const [url, setUrl] = useState(product ? product.url : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [price, setPrice] = useState(product ? product.price : '');

  if (!show) {
    return null;
  }

  const handleSubmit = () => {
    onUpdate({
      ...product,
      url,
      description,
      price
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <div>
          <label className="block mb-2">
            URL:
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="border p-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Price:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-2 w-full"
            />
          </label>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Update
          </button>
          <button
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
