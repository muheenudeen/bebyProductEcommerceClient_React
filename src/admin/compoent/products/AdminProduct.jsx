import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Admin from '../navbarAdmin/Admin';
import UpdateModal from '../componants/modal/UpdateModal';
import AddModal from '../componants/modal/AddModal';

const AdminProduct = () => {
    const [products, setProducts] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3031/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleDelete = (userId) => {
        axios.delete(`http://localhost:3031/products/${userId}`)
            .then(response => {
                setProducts(products.filter(user => user.id !== userId));
            })
            .catch(error => console.log(error));
    };

    const handleUpdate = (product) => {
        setSelectedProduct(product);
        setShowUpdateModal(true);
    };

    const handleAddProduct = (newProduct) => {
        axios.post("http://localhost:3031/products", newProduct)
            .then(response => {
                setProducts([...products, response.data]);
                alert('Product added successfully');
            })
            .catch(error => console.log(error));
    };

    const handleUpdateProduct = (updatedProduct) => {
        axios.patch(`http://localhost:3031/products/${updatedProduct.id}`, updatedProduct)
            .then(response => {
                setProducts(products.map(product =>
                    product.id === updatedProduct.id ? updatedProduct : product
                ));
                alert('Product updated successfully');
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <Admin />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded m-4"
                onClick={() => setShowAddModal(true)}
            >
                Add Product
            </button>
            <div className="p-4 space-y-4">
                {products.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border-4 border-gray-400 flex flex-col sm:flex-row items-center">
                        <img
                            className="w-full sm:w-1/4 h-20 object-contain mt-8 sm:mt-0"
                            src={item.url}
                            alt={item.name}
                        />
                        <div className="p-4 flex-1">
                            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                            <p className="text-gray-700">{item.description}</p>
                            <p className="text-gray-900 text-lg font-bold">₹{item.price}</p>
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between p-5'>
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2"
                                onClick={() => handleUpdate(item)}
                            >
                                Update
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showUpdateModal && (
                <UpdateModal
                    show={showUpdateModal}
                    onClose={() => setShowUpdateModal(false)}
                    product={selectedProduct}
                    onUpdate={handleUpdateProduct}
                />
            )}

            {showAddModal && (
                <AddModal
                    show={showAddModal}
                    onClose={() => setShowAddModal(false)}
                    onAdd={handleAddProduct}
                />
            )}
        </>
    );
};

export default AdminProduct;
