import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../navbar/NavbarLink';
import Footer from '../../../Pages/footers/Footer';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3031/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  }, []);

  return (
    <>
     
      <Navbar />

      <div className="flex flex-col lg:flex-row h-screen mt-1 bg-stone-100">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start p-8">
          <h1 className="text-4xl lg:text-7xl font-bold mb-10 italic hover:not-italic text-orange-900">
            Baby Essential Fashion & Nursery
          </h1>
          <p className="text-xl">Discover the latest trends in baby fashion and nursery essentials.</p>
        </div>
        <div className="flex-1">
          <img
            src="https://w0.peakpx.com/wallpaper/586/490/HD-wallpaper-cute-baby-cute-baby.jpg"
            alt="Baby Fashion"
            className="w-full"
            style={{ height: '120vh' }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-stone-100">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white rounded-lg shadow-lg ">
            <img src={product.url} className="w-full h-48 object-cover rounded-t-lg" alt={product.description} />
            <div className="p-2">
              <p className="text-lg font-semibold">{product.description}</p>
              <p className="text-gray-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>


    <Footer/>
    </>
  );
}

export default Home;
