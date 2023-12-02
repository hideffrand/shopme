import logo from "../assets/shopme_logo.webp"
import Icon from "./Icon";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="w-full bg-white border-b fixed z-10">
      <div className="bg-orange text-white px-44 py-1 flex items-center justify-between text-xs">
        <span className="flex gap-3">
          <a className="hover:underline" href="">All Products</a>
          <a className="hover:underline" href="">Gadgets</a>
          <a className="hover:underline" href="">Groceries</a>
          <a className="hover:underline" href="">Fashion</a>
          <a className="hover:underline" href="">Automotive</a>
          <a className="hover:underline" href="">Furnitures</a>
          <a className="hover:underline" href="">Home Decorations</a>
        </span>
        <span className="flex gap-3">
          <a href="">Helps</a>
          <a href="">About</a>
          <a href="">Information Center</a>
        </span>
      </div>
      <div className="px-24 py-2 container mx-auto flex items-center justify-between">
        <div className="flex items-center text-orange font-bold text-lg">
          <img className="w-10" src={logo} alt="Shopme Logo" />
          Shopme
        </div>
        <div className="text-sm hidden w-1/2 md:flex md:justify-between md:gap-2 border border-gray-200 px-4 py-2 rounded">
          <input className="pr-2 w-full focus:outline-none placeholder:text-gray-400" type="text" placeholder="Find your favorite items - try 'shoes,' 'smartphones,' or 'clothing'..." />
          <Icon name="search-outline" color="orange" />
        </div>
        <div className="flex items-center gap-10">
          <Icon name={"cart-outline"} color="orange"/>
          <div className="flex gap-3">
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")} className="px-3 py-1 bg-orange rounded text-white hover:bg-orange-dark">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
