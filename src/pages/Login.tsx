import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import googleLogo from "../assets/google.svg";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="layout h-auto bg-gray-100">
        <div className="mt-10 md:mt-20 md:flex">
          <Carousel />
          <div className="md:w-1/2 bg-white px-4 md:px-32 py-10 flex gap-5 flex-col justify-around">
            <h1 className="text-center text-xl">Login</h1>
            <form className="flex flex-col gap-4">
              <label htmlFor="email" className="flex flex-col">
                Email
                <input
                  className="p-2 border border-gray-300 rounded"
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  required
                />
              </label>
              <label htmlFor="Password" className="flex flex-col">
                Password
                <input
                  className="p-2 border border-gray-300 rounded"
                  type="password"
                  id="password"
                  required
                />
              </label>
              <a href="" className="text-orange underline text-end">
                Forgot password?
              </a>
              <button
                type="submit"
                className="p-2 flex items-center justify-center gap-2 bg-orange text-white hover:bg-orange-dark"
              >
                Login
              </button>
            </form>
            <p className="text-center text-gray-400">or</p>
            <button className="p-2 flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100">
              <img src={googleLogo} alt="Google Logo" className="w-6" />
              Google
            </button>
            <p className="text-center">
              Don't have an account? 
              <a href="/signup"> Signup</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
