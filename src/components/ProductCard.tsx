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
        <p className="p-2">{title}</p>
      </div>
      <div className="p-2 flex justify-between">
        <span className="flex items-end gap-1">
          <p className="text-xs text-gray-500 line-through">${(price + price * (discount/100)).toFixed()}</p>
          <p className="text-orange">${price}</p>
        </span>
        <p className="text-gray-700">{stock} left</p>
      </div>
    </div>
  );
};

export default ProductCard;
