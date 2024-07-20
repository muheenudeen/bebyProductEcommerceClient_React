import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../navbar/NavbarLink";
import Footer from "../../../Pages/footers/Footer";
import Login from "../../../Pages/Login/Login";

function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState('')
  const handleSearchChange = (event) => {
    setSearchItem(event.target.value)
  }



  useEffect(() => {
    axios.get("http://localhost:3030/products")
      .then((response) => {
        setProducts(response.data);
        
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchItem(searchTerm);
  };

  const fillerProduct = products.filter(product =>
    product.description?.toLowerCase().includes(searchItem.toLowerCase())
  )
  return (
    <>
      <Navbar onSearch={handleSearch}/>

      <div className="flex items-center justify-center space-x-6 ">
 
</div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-stone-100">
        {fillerProduct.map((product) => (
          <div key={product.id} className="p-4 bg-white rounded-lg shadow-lg">
            <img src={product.url} className="w-full h-48 object-cover rounded-t-lg" alt={product.description} />
            <div className="p-2">
              <p className="text-lg font-semibold">{product.description}</p>
              <p >{product.name}</p>
              <p className="text-gray-700">${product.price}</p>
              <button onClick={() => addToCart(product)?Login(alert('error')):alert('success')}  className="bg-blue-950 text-white p-3 rounded-2xl mt-4">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Shop;


