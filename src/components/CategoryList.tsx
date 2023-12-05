import * as React from "react";
import { getAllCategories } from "../api/products";
import { capitalizeWords } from "../utils/capitalizeWords";
import smartphones from "../assets/categories/smartphones-min.webp";
import laptops from "../assets/categories/laptops-min.webp";
import fragrances from "../assets/categories/fragrances-min.webp";
import skincare from "../assets/categories/skincare-min.webp";
import groceries from "../assets/categories/groceries-min.webp";
import home_decoration from "../assets/categories/home-decoration-min.webp";
import furniture from "../assets/categories/furniture-min.webp";
import tops from "../assets/categories/tops-min.webp";
import womens_dresses from "../assets/categories/womens-dresses-min.webp";
import womens_shoes from "../assets/categories/womens-shoes-min.webp";
import mens_shirts from "../assets/categories/mens-shirts-min.webp";
import mens_watches from "../assets/categories/mens-watches-min.webp";
import womens_jewellery from "../assets/categories/womens-jewellery-min.webp";
import sunglasses from "../assets/categories/sunglasses-min.webp";
import automotive from "../assets/categories/automotive-min.webp";
import motorcycle from "../assets/categories/motorcycle-min.webp";
import lighting from "../assets/categories/lighting-min.webp";
import mens_shoes from "../assets/categories/mens-shoes-min.webp";
import womens_watches from "../assets/categories/womens-watches-min.webp";
import womens_bags from "../assets/categories/womens-bag-min.webp";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState<boolean>(false);
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
      setLoading(true);
      const data = await getAllCategories();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching categories \n ${error}`);
    }
  }

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="px-6 py-8 bg-white rounded">
      <h1 className="md:text-xl">Category</h1>
      <p className="text-xs md:text-md pb-4 text-gray-500">
        Elevate Your Shopping Experience Across Countless Categories!
      </p>
      <div className="w-full flex overflow-x-scroll  gap-1 text-center text-gray-500">
        {loading
          ? Array.from({ length: 11 }).map((_, index) => (
              <div
                key={index}
                className="skeleton w-20 h-28 mb-4 p-2 flex flex-shrink-0 flex-col justify-between items-center gap-2 bg-gray-200"
              >
                <div className="h-full w-full bg-gray-300"></div>
                <p className="h-2 w-1/2 bg-gray-300"></p>
              </div>
            ))
          : categories?.map((category, i) => (
              <div
                key={i}
                className="w-20 h-auto mb-4 p-2 flex flex-shrink-0 flex-col justify-between items-center gap-2 bg-white border border-gray-300 rounded hover:border-orange hover:text-orange"
                onClick={() => navigate(`/category/${category}`)}
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
