import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItemDetails from './pages/ItemDetails';
import ProductsByCategory from './pages/ProductsByCategory';
import Cart from './pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<ItemDetails />} />
          <Route path="/category/:category" element={<ProductsByCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
