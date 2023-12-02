import * as React from 'react'

import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import CategoryList from '../components/CategoryList';

function Homepage() {

  return (
    <>
      <Navbar />
      <div className="Homepage bg-gray-100">
        <Carousel />
        <CategoryList />
        <ProductList />
      </div>
    </>
  );
}

export default Homepage;
