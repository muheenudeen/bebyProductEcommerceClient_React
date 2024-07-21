// src/AuthContext/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('id');
    if (userId) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userId, email, password) => { // Added password parameter
    localStorage.setItem('id', userId);
    localStorage.setItem('email', email);
    setIsLoggedIn(true);
    if (email === 'admin@gmail.com' && password === '12345') {
      navigate('/admin');
    } else {
      navigate('/adminHome');
    }
  };

  const logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    setCart([]);
    navigate('/login');
    alert('Logged out successfully');
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const incrementQuantity = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].quantity++;
      return newCart;
    });
  };

  const decrementQuantity = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity--;
      }
      return newCart;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        cart,
        login,
        logout,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
