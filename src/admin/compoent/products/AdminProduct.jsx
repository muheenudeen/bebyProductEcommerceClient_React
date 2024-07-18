import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Admin from '../navbarAdmin/Admin';
import UpdateModal from '../componants/modal/UpdateModal';

const AdminProduct = () => {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
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
        setShowModal(true);
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
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border-4 border-gray-400">
                        <img
                            className="w-full h-64 object-contain mt-8"
                            src={item.url}
                            alt={item.name}
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                            <p className="text-gray-700">{item.description}</p>
                            <p className="text-gray-900 text-lg font-bold">₹{item.price}</p>
                        </div>
                        <div className='flex justify-between p-5'>
                            <div>
                                <button
                                    className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                                    onClick={() => handleUpdate(item)}
                                >
                                    Update
                                </button>
                            </div>
                            <div>
                                <button
                                    className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <UpdateModal 
                    show={showModal} 
                    onClose={() => setShowModal(false)} 
                    product={selectedProduct} 
                    onUpdate={handleUpdateProduct} 
                />
            )}
        </>
    );
}

export default AdminProduct;
