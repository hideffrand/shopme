import * as React from "react";
import ProductCard from "./ProductCard";

interface Product {
  item: {};
  id: number;
  thumbnail: string;
  discountPercentage: number;
  title: string;
  price: number;
  stock: number;
}

interface ProductList {
  data: Product[];
  headline: string;
  desc: string;
}

const ProductList: React.FC<ProductList> = ({ data, headline, desc }) => {
  return (
    <>
      <div className="px-6 py-8 w-full my-4 bg-white">
        <h1 className="md:text-xl">{headline}</h1>
        <p className="text-xs md:text-md pb-4 text-gray-500">{desc}</p>
        <div className="flex overflow-x-scroll gap-4 pb-4">
          {data?.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <ProductCard
                id={item.id}
                thumbnail={item.thumbnail}
                discount={item.discountPercentage}
                title={item.title}
                price={item.price}
                stock={item.stock}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
