import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetails, getProductsByCategory } from "../api/products";
import { capitalizeWords } from "../utils/capitalizeWords";
import Navbar from "../components/Navbar";
import Icon from "../components/Icon";
import ProductList from "../components/ProductList";
import ProductListSkeleton from "../components/ProductListSekelon";
import Footer from "../components/Footer";

interface ProductDetails {
  title: string;
  thumbnail: string;
  description: string;
  images: [];
  price: number;
  discountPercentage: number;
  stock: number;
  category: string;
  brand: string;
}

const ItemDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [details, setDetails] = React.useState<ProductDetails>({});
  const [similar, setSimilar] = React.useState([]);
  const [displayImage, setDisplayImage] = React.useState<string>("");

  async function getDetails() {
    try {
      setLoading(true);
      const data = await getProductDetails(id);
      setDetails(data);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching product details \n ${error}`);
    }
  }

  async function getSimilarByCategory() {
    try {
      setLoading(true);
      const data = await getProductsByCategory(details.category);
      setSimilar(data);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching similar product by category \n ${error}`);
    }
  }

  React.useEffect(() => {
    getDetails();
  }, [id]);

  React.useEffect(() => {
    setDisplayImage(details.thumbnail);
    console.log(details);
    getSimilarByCategory();
  }, [details]);

  return (
    <>
      <Navbar />
      <div className="layout min-h-screen bg-gray-100">
        {loading ? (
          // Loading Skeleton
          <div className="mt-20 px-6 py-8 bg-white flex flex-col">
            <div className="md:flex md:justify-between">
              <div className="skeleton h-50 bg-gray-300 rounded md:w-1/2 flex flex-col items-center justify-between border border-gray-300"></div>
              <div className="md:w-1/2 p-10 flex flex-col gap-8">
                <div className="skseleton w-40 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="skeleton w-20 h-4 bg-gray-300 rounded"></div>
                <div className="skeleton rounded w-12 h-8 bg-gray-300"></div>
                <div className="skeleton h-2 w-20 bg-gray-300"></div>
                <div className="skeleton h-2 w-20 bg-gray-300 rounded-full"></div>
                <div className="flex gap-4">
                  <button
                    className="flex gap-2 py-4 px-6 border border-orange"
                    disabled
                  >
                    <Icon name="add-outline" color="black" />
                    Add to Cart
                  </button>
                  <button className="py-4 px-14 bg-orange text-white" disabled>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-20 px-6 py-8 bg-white flex flex-col">
            <div className="md:flex md:justify-between">
              <div className="md:w-1/2 flex flex-col items-center justify-between border border-gray-300">
                <div className="w-1/2 p-4">
                  <div className="w-full">
                    <img
                      className="w-full"
                      src={displayImage}
                      alt={details.title}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-around gap-10 bg-gray-100 md:p-4">
                  {details.images?.map((image, index) => (
                    <div className="w-16 flex-shrink-0 flex items-center justify-center">
                      <img
                        className="w-full cursor-pointer"
                        key={index}
                        src={image}
                        alt={details.title}
                        onClick={() => setDisplayImage(image)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col gap-8">
                <div>
                  <h1 className="text-xl">{details.title}</h1>
                  <p className="mb-4 text-gray-400">{details.description}</p>
                  <p>Brand: {details.brand}</p>
                </div>
                <div>
                  <p>{details.stock} left</p>
                  <span className="flex items-end gap-1">
                    <p className="text-md text-gray-500 line-through">
                      $
                      {(
                        details.price +
                        details.price * (details.discountPercentage / 100)
                      ).toFixed()}
                    </p>
                    <p className="text-2xl text-orange">${details.price}</p>
                  </span>
                </div>
                <div>
                  <p>Discover more like this: </p>
                  <button
                    className="mt-1 py-1 px-4 bg-gray-300 rounded-full hover:bg-orange hover:text-white"
                    onClick={() => navigate(`/category/${details.category}`)}
                  >
                    {details.category}
                  </button>
                </div>
                <div className="flex gap-4">
                  <button className="flex gap-2 py-4 px-6 border border-orange">
                    <Icon name="add-outline" color="black" />
                    Add to Cart
                  </button>
                  <button className="py-4 px-14 bg-orange text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {loading ? (
          <ProductListSkeleton n={5} />
        ) : (
          <ProductList
            data={similar}
            headline="See something similar"
            desc=""
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default ItemDetails;
