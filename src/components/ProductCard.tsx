import React from "react";

interface ProductCard {
  thumbnail: string;
  discount: number;
  title: string;
  price: number;
  stock: number;
}

const ProductCard: React.FC<ProductCard> = ({
  thumbnail,
  discount,
  title,
  price,
  stock,
}) => {
  return (
    <div className="w-36 h-60 md:w-52 md:h-80 flex flex-col justify-between rounded border border-solid border-gray-400 relative hover:border-orange">
      <p className="rounded-br-full pl-2 pr-4 bg-orange text-white absolute">
        {discount}%
      </p>
      <div className="h-full">
        <div
          className="w-full h-3/4 bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
        <p className="py-2 px-1">{title}</p>
      </div>
      <div className="p-1 flex justify-between">
        <p className="text-orange">${price}</p>
        <p className="text-gray-700">{stock} left</p>
      </div>
    </div>
  );
};

export default ProductCard;
