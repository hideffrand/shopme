import * as React from "react";
import { getCart } from "../api/cart";
import logo from "../assets/shopme_logo.webp";
import Icon from "./Icon";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../api/products";

const Navbar = () => {
  const [query, setQuery] = React.useState<string>("");
  const [items, setItems] = React.useState<any[]>([]);
  const [qResult, setQResult] = React.useState<any[]>([]);

  const navigate = useNavigate();

  // React.useEffect(() => {
  //   setItems(getCart());
  // }, [items]);

  React.useEffect(() => {
    console.log(query);
  }, [query]);

  async function handleSubmitQ(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await searchProducts(query);
      setQResult(res);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <nav className="w-full bg-white border-b fixed z-10">
      <div className="px-6 md:px-24 py-2 container mx-auto flex items-center justify-between">
        <div
          className="flex items-center text-orange font-bold text-lg cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img className="w-10" src={logo} alt="Shopme Logo" />
          Shopme
        </div>
        <div className="text-sm hidden w-1/2 md:flex md:justify-between md:gap-2 border border-gray-200 px-4 py-2 rounded relative">
          <form className="w-full flex items-center" onSubmit={handleSubmitQ}>
            <input
              className="pr-2 w-full focus:outline-none placeholder:text-gray-400"
              type="text"
              placeholder="Find your favorite items - try 'shoes,' 'smartphones,' or 'clothing'..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <Icon name="search-outline" color="orange" size="2xl" />
          <div className="absolute top-full bg-white w-full left-0 rounded-sm shadow-md">
            {qResult.map((item, i) => (
              <p
                key={i}
                onClick={() => {
                  navigate(`/${item.id}`);
                  setQResult([]);
                }}
                className="mx-4 py-4 hover:text-orange cursor-pointer border-b"
              >
                {item.title}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="relative" onClick={() => navigate("/cart")}>
            <Icon name={"cart-outline"} color="orange" size="2xl" />
            {items.length > 0 && (
              <div className="-translate-y-1 translate-x-1 absolute top-0 right-0 w-4 rounded-full bg-orange text-white text-center text-xs flex items-center justify-center">
                {items.length}
              </div>
            )}
          </div>
          <div className="hidden md:flex gap-3">
            <button onClick={() => navigate("/login")}>Login</button>
            <button
              onClick={() => navigate("/signup")}
              className="px-3 py-1 bg-orange rounded text-white hover:bg-orange-dark"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
