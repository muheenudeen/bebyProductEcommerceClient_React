import React from 'react';
import Navbar from '../../../navbar/NavbarLink';
import Footer from '../../../Pages/footers/Footer';

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="relative mt-1">
        <div className=" top-0 left-0 w-full flex justify-center mb-10">
          <h1 className="absolute text-6xl font-bold text-cyan-950 animate-bounce">
            United States Favourite Baby Store
          </h1>
          {/* <img src="https://cimg0.ibsrv.net/cimg/www.justmommies.com/800x450_85/820/AdobeStock_204141736-394820.jpg" className="w-full h-auto"  alt="" /> */}

       
        <img
          src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-about-us-page-header-img.jpg" alt="About Us Header" className="w-full h-auto" /> </div>
      
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
