import React, { useState } from "react";

const AddModal = ({show, onClose, onAdd}) =>{
    const [newProduct,setNewProduct] =useState({
        name:'',
        description:'',
        url:'',
        price:''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setNewProduct({
            ...newProduct,
            [name]:value
        })
    }

    const handleSubmit=()=>{

        onAdd(newProduct);
        onClose();
    }
    if(!show){
        return null
    }
    return(

        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={newProduct.description}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
            />
            <input
                type="text"
                name="url"
                placeholder="Image URL"
                value={newProduct.url}
                onChange={handleChange}
                className="w-full mb-2 p-2 border rounded"
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleChange}
                className="w-full mb-4 p-2 border rounded"
            />
            <div className="flex justify-end">
                <button
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2"
                    onClick={onClose}
                >
                    Cancel
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={handleSubmit}
                >
                    Add Product
                </button>
            </div>
        </div>
    </div>
    )
}

export default AddModal