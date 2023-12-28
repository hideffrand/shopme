import * as React from 'react';

// Define the type for your cart item
export type CartItem = {
  // Define the structure of your cart item
};

// Define the type for your cart context
type CartContextProps = {
  children: React.ReactNode;
};

// Create a new context
const CartContext = React.createContext<{
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  getCart: () => CartItem[];
  deleteFromCart: (index: number) => void;
}>({
  cartItems: [],
  addToCart: () => {},
  getCart: () => [],
  deleteFromCart: () => {},
});

const CartProvider: React.FC<CartContextProps> = ({ children }) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  React.useEffect(() => {
    const data = getCart();
    setCartItems(data);
  }, []);

  const addToCart = (item: CartItem) => {
    const currentCart = localStorage.getItem('cart');
    const data = JSON.parse(currentCart) || [];

    data.push(item);

    localStorage.setItem('cart', JSON.stringify(data));
    setCartItems(data);
  };

  const getCart = () => {
    const currentCart = localStorage.getItem('cart');
    const data = JSON.parse(currentCart) || [];

    return data;
  };

  const deleteFromCart = (index: number) => {
    const currentCart = localStorage.getItem('cart');
    let data = JSON.parse(currentCart) || [];

    data.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(data));
    setCartItems(data);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
