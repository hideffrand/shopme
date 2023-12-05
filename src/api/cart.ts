export const addToCart = (item: {}) => {
  const currentCart = localStorage.getItem("cart");
  const data = JSON.parse(currentCart) || [];

  data.push(item);
  
  localStorage.setItem("cart", JSON.stringify(data));
};

export const getCart = () => {
  const currentCart = localStorage.getItem("cart");
  const data = JSON.parse(currentCart) || [];

  return data;
};

export const deleteFromCart = (index: number) => {
  const currentCart = localStorage.getItem("cart");
  let data = JSON.parse(currentCart) || [];

  data.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(data));
};
