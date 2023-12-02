import * as React from "react";
import { getAllCategories } from "../api/products";
import { capitalizeWords } from "../utils/capitalizeWords";
import smartphones from "../assets/smartphones.jpg";
import laptops from "../assets/laptops.jpg";
import fragrances from "../assets/fragrances.jpg";
import skincare from "../assets/skincare.jpg";
import groceries from "../assets/groceries.jpg";
import home_decoration from "../assets/home-decoration.jpg";
import furniture from "../assets/furniture.jpg";
import tops from "../assets/tops.jpg";
import womens_dresses from "../assets/womens-dresses.jpg";
import womens_shoes from "../assets/womens-shoes.jpg";
import mens_shirts from "../assets/mens-shirts.jpg";
import mens_watches from "../assets/mens-watches.jpg";
import womens_jewellery from "../assets/womens-jewellery.jpg";
import sunglasses from "../assets/sunglasses.jpg";
import automotive from "../assets/automotive.jpg";
import motorcycle from "../assets/motorcycle.jpg";
import lighting from "../assets/lighting.jpg";
import mens_shoes from "../assets/mens-shoes.jpg";
import womens_watches from "../assets/womens-watches.jpg";
import womens_bags from "../assets/womens-bag.jpg";

const CategoryList = () => {
  const [categories, setCategories] = React.useState([]);
  const images = [
    smartphones,
    laptops,
    fragrances,
    skincare,
    groceries,
    home_decoration,
    furniture,
    tops,
    womens_dresses,
    womens_shoes,
    mens_shirts,
    mens_shoes,
    mens_watches,
    womens_watches,
    womens_bags,
    womens_jewellery,
    sunglasses,
    automotive,
    motorcycle,
    lighting,
  ];

  async function fetchCategories() {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error(`Error fetching categories \n ${error}`);
    }
  }

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="px-6 py-8 bg-white rounded">
      <h1 className="text-xl">Category</h1>
      <p className="pb-4 text-gray-500">Discover, Click, Delight: Elevate Your Shopping Experience Across Countless Categories!</p>
      <div className="w-full flex overflow-x-scroll  gap-1 text-center text-gray-500">
        {categories?.map((category, i) => (
          <div
            key={i}
            className="w-20 h-auto mb-4 p-2 flex flex-shrink-0 flex-col justify-between items-center gap-2 bg-white border border-gray-300 hover:border-orange hover:text-orange"
          >
            <img src={images[i]} alt={category} />
            <p className="text-xs">{capitalizeWords(category)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
