import logo from "../assets/shopme_logo.webp"
import Icon from "./Icon";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border p-4 fixed z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center text-orange font-bold text-lg">
          <img className="w-10" src={logo} alt="Shopme Logo" />
          Shopme
        </div>
        <div className="flex items-center gap-10">
          <Icon name={"cart-outline"} color="orange"/>
          <div className="flex gap-3">
            <button>Login</button>
            <button className="px-3 py-1 bg-orange rounded text-white hover:bg-orange-dark">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
