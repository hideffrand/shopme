export const getAllProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(`Error fetching all products: \n ${error}`)
  }
}

export const getProductDetails = async (id: number) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product details: \n ${error}`)
  }
}

export const searchProducts = async (q: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${q}`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(`Error fetching products by search: \n ${error}`)
  }
}

export const getAllCategories = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching all categories: \n ${error}`)
  }
}

export const getProductsByCategory = async (q: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${q}`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(`Error fetching products by category: \n ${error}`)
  }
}
