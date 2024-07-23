import React, { useEffect, useState } from 'react';
import Admin from '../navbarAdmin/Admin';
import axios from 'axios';

function AdminHome() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3031/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8000/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  // const subTotalOrders = users.reduce((total, user) => {
  //   return total + (user.orders ? user.orders.length : 0);
  // }, 0);

  return (
    <>
      <Admin />
      <div className="bg-amber-100 p-4 min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="bg-white p-4 mb-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xl font-semibold">Total Users: {users.length}</p>
            <p className="text-xl font-semibold">Total Products: {products.length}</p>
          </div>
          {/* <div className="bg-white p-4 mb-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xl font-semibold">Sub Total Orders: {subTotalOrders}</p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default AdminHome;
