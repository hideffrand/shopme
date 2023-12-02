import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="layout bg-gray-100">
        <Header />
        <CategoryList />
        <ProductList />
      </div>
    </>
  );
}

export default Homepage;
