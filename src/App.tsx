import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItemDetails from './pages/ItemDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
