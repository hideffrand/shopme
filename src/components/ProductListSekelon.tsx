import * as React from "react"
import ProductCardSkeleton from "./ProductCardSkeleton";

interface ProductListSkeleton {
  n: number;
}

const ProductListSkeleton: React.FC<ProductListSkeleton> = ({ n }) => {
  return (
    <div className="px-6 py-8 w-full my-4 bg-white">
      <h1 className="text-xl">All Products | Discounts Available</h1>
      <p className="pb-4 text-gray-500">
        Every Purchase, Every Thrill: Elevate Your Experience with All-Products
        Delight – Discounts Await!
      </p>
      <div className="flex overflow-x-scroll gap-4 pb-4">
        {Array.from({ length: n }).map((_, index) => (
          <div key={index} className="flex-shrink-0">
            <ProductCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListSkeleton;