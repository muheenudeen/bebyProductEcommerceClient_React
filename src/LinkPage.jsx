import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Navbar from './User/navbar/NavbarLink';
import Home from './User/component/main/home/Home';
import Shop from './User/component/main/shops/Shop';
import AboutUs from './User/component/main/about/AboutUs';
import ContactUs from './User/component/main/contacts/ContactUs';
import Login from './User/Pages/Login/Login';
import PaymentForm from './User/navbar/payment/PaymentForm';
import SignUp from './User/Pages/SignUp/SignUp.jsx';
import Carts from './User/component/main/cartPage/Carts.jsx';
// import Logout from './User/Pages/logouts/Logout.jsx';
import Admin from './admin/compoent/navbarAdmin/Admin.jsx';
import AdminHome from './admin/compoent/home/AdminHome.jsx';
import Userlist from './admin/compoent/userlists/UserList.jsx';
import AdminProduct from './admin/compoent/products/AdminProduct.jsx';

const LinkPage = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={handleAddToCart} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cart' element={<Carts cart={cart} setCart={setCart} />} />
        <Route path='/paymentform' element={<PaymentForm />} />
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path='/logout' element={<Logout />} /> */}

        <Route path='/admin' element={<Admin />} />
        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/userlist' element={<Userlist />} />
        <Route path='/adminproduct' element={<AdminProduct />} />
      </Routes>
    </>
  );
};

export default LinkPage;
