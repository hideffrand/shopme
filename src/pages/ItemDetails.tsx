import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetails, getProductsByCategory } from "../api/products";
import { capitalizeWords } from "../utils/capitalizeWords";
import { addToCart } from "../api/cart";
import Navbar from "../components/Navbar";
import Icon from "../components/Icon";
import ProductList from "../components/ProductList";
import ProductListSkeleton from "../components/ProductListSekelon";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

interface ProductDetails {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  images: [];
  price: number;
  discountPercentage: number;
  stock: number;
  category: string;
  brand: string;
  qty: number;
}

const ItemDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [qty, setQty] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [details, setDetails] = React.useState<ProductDetails>({});
  const [similar, setSimilar] = React.useState([]);
  const [displayImage, setDisplayImage] = React.useState<string>("");
  const [alert, setAlert] = React.useState(false);

  function showAlert() {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1000);
  }

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

  async function handleAddToCart() {
    const item = {
      id: id,
      title: details.title,
      thumbnail: details.thumbnail,
      price: details.price,
      discountPercentage: details.discountPercentage,
      stock: details.stock,
      brand: details.brand,
      qty: details.qty,
    };
    addToCart(item);
    showAlert();
  }

  React.useEffect(() => {
    getDetails();
  }, [id]);

  React.useEffect(() => {
    details["qty"] = qty;
    setDisplayImage(details.thumbnail);
    getSimilarByCategory();
  }, [details]);

  React.useEffect(() => {
    setDetails((prevDetails) => ({ ...prevDetails, qty }));
  }, [qty]);

  return (
    <>
      <Navbar />
      <div className="layout min-h-screen bg-gray-100">
        {alert && <Alert text="Item Adedd to your Cart" />}
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
          <div className="p-2 mt-20 md:px-6 md:py-8 bg-white flex flex-col">
            <div className="md:flex md:justify-between">
              <div className="w-full md:w-1/2 flex flex-col items-center justify-between">
                <div className="w-1/2 p-4">
                  <div
                    className="w-80 bg-cover bg-center h-80"
                    style={{ backgroundImage: `url(${displayImage})` }}
                  >
                    {/* <img
                      className="w-full"
                      src={displayImage}
                      alt={details.title}
                    /> */}
                  </div>
                </div>
                <div className="w-full flex bg-gray-100 md:p-4 md:justify-around">
                  {details.images?.map((image, index) => (
                    <div className="w-16 flex items-center justify-center border border-gray-200">
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
              <div className="w-full md:w-1/2 p-2 md:p-10 flex flex-col gap-8">
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
                    className="mt-1 py-1 px-4 bg-gray-200 rounded-full hover:bg-orange hover:text-white"
                    onClick={() => navigate(`/category/${details.category}`)}
                  >
                    {details.category}
                  </button>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 py-1 px-3"
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  >
                    -
                  </button>
                  <p className="border py-1 px-3">{qty}</p>
                  <button
                    className="bg-gray-200 py-1 px-3"
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-4">
                  <button
                    className="rounded flex px-2 items-center md:gap-2 text-sm md:text-md md:py-4 md:px-8 border border-orange"
                    onClick={() => handleAddToCart()}
                  >
                    <Icon name="add-outline" color="black" size="md" />
                    Add to Cart
                  </button>
                  <button className="rounded px-8 py-4 md:px-14 bg-orange text-white text-sm md:text-md">
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
