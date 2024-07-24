import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  const id = localStorage.getItem('id');

  useEffect(() => {
    const Id = localStorage.getItem('id');
    setUserId(Id);
    if (userId) {
      setIsLoggedIn(true);
    }
  }, [userId]);

  useEffect(() => {
    axios.get(`http://localhost:8000/users`)
      .then(res => setOrder(res.data.order))
      .catch(error => console.log(`error is ${error}`));
  }, []);

  const login = (email, password) => {
    axios.get('http://localhost:8000/users')
      .then((res) => {
        let adminData = false;

        if (email === 'admin@gmail.com' && password === '12345') {
          adminData = true;
        }

        const findeData = res.data.find(item => item.email === email && item.password === password);
        const exitData = res.data.find(item => item.email === email && item.password !== password);

        if (adminData) {
          toast.success('Welcome admin');
          localStorage.setItem('id', email);
          setIsLoggedIn(true);
          setTimeout(() => navigate("/adminhome"), 1000);
        } else if (findeData) {
          if (findeData.isBlocked) {
            toast.error('You are blocked');
          } else {
            toast.success('Login successful');
            localStorage.setItem('id', findeData.id);
            localStorage.setItem('user', JSON.stringify(findeData));
            setIsLoggedIn(true);
            setTimeout(() => navigate("/"), 1000);
          }
        } else if (exitData) {
          toast.error('Enter your password correctly');
        } else {
          toast(`You don't have an account`, {});
          setTimeout(() => navigate("/signup"), 1000);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    setCart([]);
    navigate('/login');
    alert('logout');
  };

  const addToCart = (product) => {
    const productExists = cart.some((item) => item.id === product.id);

    if (productExists) {
      toast.error('This product is already added to the cart');
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      toast.success('Product added to the cart');
    }
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
        decrementQuantity,
        order
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
