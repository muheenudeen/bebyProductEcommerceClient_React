import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        place: '',
        location: '',
        phone: '',
        pincode: '',
        paymentName: '',
        atmNumber: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6">Payment Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Company Name</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Place</label>
                    <input type="text" name="place" value={formData.place} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Pincode</label>
                    <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required
                    />
                </div>

                <h3 className="text-xl font-bold mb-4">Payment</h3>

                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input type="text" name="paymentName" value={formData.paymentName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">ATM Number</label>
                    <input type="text" name="atmNumber" value={formData.atmNumber} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">CVV</label>
                    <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border rounded" required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
                <Link to='/home' className='bg-lime-900 text-white flex '>to Home</Link>
            </form>
        </div>
    );
};

export default PaymentForm;
