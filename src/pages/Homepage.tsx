import * as React from 'react'

import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

function Homepage() {

  return (
    <>
      <Navbar />
      <div className="Homepage">
        <Carousel />
        <h1 className="py-4 text-xl">All Products | Discounts Available</h1>
        <ProductList />
      </div>
    </>
  );
}

export default Homepage;
