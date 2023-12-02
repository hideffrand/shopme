import Carousel from "./Carousel";
import groceriesBanner from "../assets/banners/groceries.webp";

export default function Header() {
  return (
    <div className="mt-14 mb-4 w-full md:flex md:justify-center md:gap-2">
      <Carousel />
      <div className="md:w-1/2 bg-white">
          <div
            className="w-full h-52 bg-cover bg-center"
            style={{
              backgroundImage: `url(${groceriesBanner})`,
            }}
          ></div>
          <div className="p-4 flex items-center justify-between">
            <div>
              <h1 className="text-bold text-orange text-xl">Shopme Mart!</h1>
              <p className="text-sm text-black">
                Fresh Picks, Swift Clicks: Your Grocery Shopping, Simplified!
              </p>
            </div>
            <button className="px-4 py-2 bg-orange rounded-full text-white hover:bg-orange-dark">Coming Soon</button>
          </div>
      </div>
    </div>
  );
}
