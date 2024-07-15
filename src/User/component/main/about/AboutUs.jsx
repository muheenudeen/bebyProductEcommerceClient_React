import React from 'react';
import Navbar from '../../../navbar/NavbarLink';
import Footer from '../../../Pages/footers/Footer';

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="relative mt-5">
        <div className=" top-0 left-0 w-full flex justify-center mb-10">
          <h1 className="absolute text-6xl font-bold text-cyan-950 animate-bounce">
            United States Favourite Baby Store
          </h1>
          <img src="https://www.pixel4k.com/wp-content/uploads/2018/03/Cute%20Baby%20in%20Autumn1165110955.jpg.webp" alt="" />

        </div>
        <img
          src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-about-us-page-header-img.jpg" alt="About Us Header" className="w-full h-auto" /> </div>
      <Footer />
    </>
  );
}

export default AboutUs;
