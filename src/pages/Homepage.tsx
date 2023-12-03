import * as React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import { getAllProducts } from "../api/products";
import ProductListSkeleton from "../components/ProductListSekelon";
import Footer from "../components/Footer";

function Homepage() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const data = await getAllProducts();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout bg-gray-100">
        <Header />
        <CategoryList />
        {loading ? (
          <ProductListSkeleton n={5} />
        ) : (
          <ProductList
            data={products}
            headline="All Products | Discount Available"
            desc="Elevate Your Experience with All-Products Delight – Discounts Await!"
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
