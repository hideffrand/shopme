import * as React from "react";
import { getAllProducts } from "../api/products";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSekeleton";

interface Product {
  id: number;
  thumbnail: string;
  discountPercentage: number;
  title: string;
  price: number;
  stock: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
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
      <div className="px-6 py-8 w-full my-4 bg-white">
        <h1 className="text-xl">All Products | Discounts Available</h1>
        <p className="pb-4 text-gray-500">
          Every Purchase, Every Thrill: Elevate Your Experience with
          All-Products Delight – Discounts Await!
        </p>
        <div className="flex overflow-x-scroll gap-4 pb-4">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex-shrink-0">
                  <ProductCardSkeleton />
                </div>
              ))
            : products?.map((product, index) => (
                <div key={index} className="flex-shrink-0">
                  <ProductCard
                    id={product.id}
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
    </>
  );
};

export default ProductList;
