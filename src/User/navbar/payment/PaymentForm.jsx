import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthContext';

const PaymentForm = () => {
    const location = useLocation();
    const { state } = location;
    const { amount, orderDetails } = state || { amount: 0, orderDetails: [] };
    const { order } = useContext(AuthContext)
    const id = localStorage.getItem(`id`)
    const [formData, setFormData] = useState({
        firstName: '',
        location: '',
        phone: '',
        atmNumber: '',
        cvv: '',
        amount: amount
    });
    // console.log(order);
    const [toAdd, setToAdd] = useState([]);

    const paymentData = (payment) => {
        const dataToPost = [
            ...payment,
            orderDetails
        ];
        // console.log(paymentData);
        const allorder = [order, dataToPost]
        console.log(allorder);
        axios.patch(`http://localhost:8000/users/${id}`, { order: allorder })
            .then(response => {
                setToAdd([...toAdd, response.data]);
                alert('Payment successful');
            })
            .catch(error => console.log(error));
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        paymentData(formData);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6">Payment Form</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Card Number</label>
                    <input type="text" name="atmNumber" value={formData.atmNumber} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">CVV</label>
                    <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
                >
                    Submit
                </button>
                <Link to='/' className='bg-lime-900 text-white flex mt-4 p-2 rounded hover:bg-lime-800'>To Home</Link>
            </form>
        </div>
    );
};

export default PaymentForm;
