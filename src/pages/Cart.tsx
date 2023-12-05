import * as React from "react";
import { deleteFromCart, getCart } from "../api/cart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import { useNavigate } from "react-router-dom";

interface ProductDetails {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  qty: number;
  isChecked: boolean;
}

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = React.useState<ProductDetails[]>([]);

  React.useEffect(() => {
    setItems(getCart());
  }, []);

  const handleQuantityChange = (index: number, newQty: number) => {
    newQty = Math.max(1, newQty);

    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].qty = newQty;
      return updatedItems;
    });
  };

  const handleCheckboxChange = (index: number) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].isChecked = !updatedItems[index].isChecked;
      return updatedItems;
    });
  };

  const getTotalPrice = () => {
    return items
      .filter((item) => item.isChecked)
      .reduce(
        (total, item) =>
          total +
          (item.price + item.price * (item.discountPercentage / 100)) *
            item.qty,
        0
      )
      .toFixed(2);
  };

  const getTotalPriceAfterDiscount = () => {
    return items
      .filter((item) => item.isChecked)
      .reduce((total, item) => total + item.price * item.qty, 0)
      .toFixed(2);
  };

  const getDifference = () => {
    return (getTotalPrice() - getTotalPriceAfterDiscount()).toFixed(2);
  };

  return (
    <>
      <Navbar />
      <div className="layout bg-gray-100">
        <div className="py-4 px-4 mt-20 bg-white min-h-screen h-auto flex flex-col md:flex-row justify-between gap-4 relative">
          <div className="md:w-1/2 overflow-y-scroll h-screen">
            {items?.map((item, i) => (
              <div
                key={i}
                className="my-2 w-full border border-gray-200 flex gap-2"
              >
                <div
                  className="w-1/4 flex relative"
                  onClick={() => navigate(`/${item.id}`)}
                >
                  <div
                    className="w-full h-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                  />
                  <p className="rounded-br-full pl-2 pr-4 bg-orange text-white absolute">
                    -{item.discountPercentage}%
                  </p>
                </div>
                <div className="p-4 w-full flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <h1>{item.title}</h1>
                      <p className="text-xs text-gray-500">{item.brand}</p>
                      <span className="flex items-end gap-1">
                        <p className="text-xs text-gray-500 line-through">
                          $
                          {(
                            item.price +
                            item.price * (item.discountPercentage / 100)
                          ).toFixed()}
                        </p>
                        <p className="text-orange">${item.price}</p>
                      </span>
                    </div>
                    <span className="flex items-end gap-1">
                      <p>Total: </p>
                      <p className="text-orange">${item.price * item.qty}</p>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <button
                        className="bg-gray-200 py-1 px-3"
                        onClick={() => handleQuantityChange(i, item.qty - 1)}
                      >
                        -
                      </button>
                      <p className="border py-1 px-3">{item.qty}</p>
                      <button
                        className="bg-gray-200 py-1 px-3"
                        onClick={() => handleQuantityChange(i, item.qty + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        deleteFromCart(i);
                        location.reload();
                      }}
                      className="flex text-sm items-center gap-1 bg-gray-100 px-4 py-2 hover:bg-gray-300 rounded"
                    >
                      Remove
                      <Icon name="trash-outline" size="2xl" />
                    </button>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="w-6 h-6 m-6"
                  checked={item.isChecked}
                  onChange={() => handleCheckboxChange(i)}
                />
              </div>
            ))}
          </div>
          <div className="pt-2 md:w-1/2 flex flex-col gap-2">
            <div className="flex justify-between">
              <p>Items</p>
              <p>Price</p>
            </div>
            {items?.map(
              (item, i) =>
                item.isChecked && (
                  <div key={i} className="flex justify-between border-b pb-2">
                    <div>
                      <p>{item.title}</p>
                      <p className="text-sm text-gray-500">{item.brand}</p>
                      <p>{item.qty}</p>
                    </div>
                    <p>${item.price}</p>
                  </div>
                )
            )}
            <div className="flex justify-between">
              <p>Subtotal: </p>
              <p className="p-2 ml-auto">${getTotalPrice()}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount: </p>
              <p className="p-2 ml-auto text-red-400">- ${getDifference()}</p>
            </div>
            <div className="flex justify-between border-b">
              <p>Total: </p>
              <p className="p-2 ml-auto">${getTotalPriceAfterDiscount()}</p>
            </div>
            <button className="ml-auto rounded px-4 py-2 text-white bg-orange hover:bg-orange-dark">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
