import * as React from "react";
import { getAllProducts } from "../api/products";
import ProductCard from "./ProductCard";
import Icon from "./Icon";

interface Product {
  thumbnail: string;
  discountPercentage: number;
  title: string;
  price: number;
  stock: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  async function fetchProducts() {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full">
      <div className="flex overflow-x-scroll gap-4 pb-4">
        {products?.map((product, index) => (
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
  );
};

export default ProductList;
