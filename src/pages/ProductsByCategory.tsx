import * as React from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../api/products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { capitalizeWords } from "../utils/capitalizeWords";
import CategoryList from "../components/CategoryList";
import ProductCardSkeleton from "../components/ProductCardSekeleton";

interface Product {
  thumbnail: string;
  discountPercentage: number;
  title: string;
  price: number;
  stock: number;
}

const ProductsByCategory = () => {
  const { category } = useParams();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [products, setProducts] = React.useState<Product[]>([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const data = await getProductsByCategory(category);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching products by category \n ${error}`);
    }
  }
  React.useEffect(() => {
    fetchProducts();
  }, [category]);
  return (
    <>
      <Navbar />
      <div className="layout">
        <div className="pt-14 min-h-screen flex flex-col gap-3">
          <CategoryList />
          <div className="px-6 py-8 bg-white">
            <h1 className="text-xl">{capitalizeWords(category)}</h1>
            <p className="pb-4 text-sm text-gray-400">
              Discover Excellence in Every Choice: Where Quality Meets
              Affordability.
            </p>
            <div className="flex flex-wrap gap-3">
              {loading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex-shrink-0">
                      <ProductCardSkeleton />
                    </div>
                  ))
                : products?.map((product, index) => (
                    <div key={index} className="flex-shrink-0">
                      <ProductCard
                        thumbnail={product.thumbnail}
                        discount={product.discountPercentage}
                        title={product.title}
                        price={product.price}
                        stock={product.stock}
                      />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsByCategory;
