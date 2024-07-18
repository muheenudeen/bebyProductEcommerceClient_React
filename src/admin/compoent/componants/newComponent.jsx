// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [filterItems, setFilterItems] = useState(products);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const id = localStorage.getItem("id");
//   const [users, setUsers] = useState([]);
//   const [filterUsers, setFilterUsers] = useState(users);
//   const [category, setCategory] = useState("all");

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/User")
//       .then((res) => {
//         setUsers(res.data);
//         setFilterUsers(res.data);
//       })
//       .catch((err) => toast.error("Some went wrong", err.message));
//   }, []);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/products")
//       .then((res) => {
//         setProducts(res.data);
//         setFilterItems(res.data);
//       })
//       .catch((err) => toast.error("Something went wrong", err.message));
//   }, []);

//   useEffect(() => {
//     if (id) {
//       axios
//         .get(`http://localhost:8000/User/${id}`)
//         .then((res) => {
//           setCart(res.data.cart);
//         })
//         .catch((err) => toast.warning("Something went wrong", err.message));
//     }
//   }, [id]);

//   useEffect(() => {
//     if (localStorage.getItem("id")) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const login = () => {
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     localStorage.clear();
//     // navigate('/logout')
//   };

//   const addToCart = (product) => {
//     const updatedCart = cart.map((item) =>
//       item.id === product.id
//         ? { ...item, quantity: item.quantity + product.quantity }
//         : item
//     );
//     if (!updatedCart.some((item) => item.id === product.id)) {
//       updatedCart.push(product);
//     }
//     setCart(updatedCart);
//     axios
//       .patch(`http://localhost:8000/User/${id}`, { cart: updatedCart })
//       .then((res) => {
//         setCart(res.data.cart);
//       })
//       .catch((err) => toast.error("Something went wrong", err.message));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: newQuantity } : item
//     );
//     setCart(updatedCart);

//     axios
//       .patch(`http://localhost:8000/User/${id}`, { cart: updatedCart })
//       .then((res) => {
//         setCart(res.data.cart);
//       })
//       .catch((err) => toast.error("Something went wrong", err.message));
//   };

//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     axios
//       .patch(`http://localhost:8000/User/${id}`, { cart: updatedCart })
//       .then((res) => {
//         setCart(res.data.cart);
//       })
//       .catch((err) => toast.error("Something went wrong", err.message));
//   };

//   // console.log(cart);

//   const searchFilter = (searchValue) => {
//     const filtered = products.filter((product) => {
//       return product.title.toLowerCase().includes(searchValue.toLowerCase());
//     });
//     setFilterItems(filtered);
//   };

//   const searchFilterUser = (searchValue) => {
//     const filteredUsers = users.filter((user) => {
//       return user.name.toLowerCase().includes(searchValue.toLowerCase());
//     });
//     setFilterUsers(filteredUsers);
//   };

//   const categorize = (category) => {
//     const newCategory = products.filter((product) => {
//       if (category === "all") {
//         return products;
//       } else {
//         return product.category === category;
//       }
//     });
//     setFilterItems(newCategory);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         setCart,
//         updateQuantity,
//         removeFromCart,
//         searchFilter,
//         filterItems,
//         isLoggedIn,
//         login,
//         logout,
//         products,
//         setFilterItems,
//         setFilterUsers,
//         filterUsers,
//         category,
//         setCategory,
//         searchFilterUser,
//         categorize,
//         users,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(CartContext);
// };