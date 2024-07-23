import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Navbar from "../../../navbar/NavbarLink"; 
import Footer from "../../../Pages/footers/Footer";  
import { AuthContext } from "../../../AuthContext/AuthContext";

function Shop() {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [category, setCategory] = useState("");
  const { addToCart, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    axios.get("http://localhost:3031/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  }, []);

  const handleSearchChange = (searchValue) => {
    setSearchItem(searchValue);
  };

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      addToCart(product);
    } else {
      alert('Please loging.');
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.description?.toLowerCase().includes(searchItem.toLowerCase());
    const matchesCategory = category ? product.category === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar onSearch={handleSearchChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-stone-100">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-4 bg-white rounded-lg shadow-lg">
            <img src={product.url} className="w-full h-48 object-cover rounded-t-lg" alt={product.description} />
            <div className="p-2">
              <p className="text-lg font-semibold">{product.description}</p>
              <p>{product.name}</p>
              <p className="text-gray-700">${product.price}</p>
              <button onClick={() => handleAddToCart(product)} className="bg-blue-950 text-white p-3 rounded-2xl mt-4">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Shop;
