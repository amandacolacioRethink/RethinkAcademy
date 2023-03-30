const url = "https://fakestoreapi.com/";

const geralFetch = async (url) => {
  return await fetch(url).then((request) => request.json());
};

const getAllProducts = async (endpoint) => {
  if (endpoint !== "products") throw new Error("Endpoit must be 'products'");
  return await geralFetch(url + endpoint);
};

const getProductsWithId = async (id) => {
  const allProducts = await getAllProducts("products");
  if (!id || id <= 0 || id > allProducts.length) throw new Error("Invalid ID");
  return await geralFetch(url + "products/" + id);
};

const getAllCategories = async (endpoint) => {
  if (endpoint !== "categories")
    throw new Error("Endpoit must be 'categories'");
  return await geralFetch(url + "products/" + endpoint);
};

const getAllProductsOfACategory = async (categorys) => {
  const category = await getAllCategories("categories");
  if (!categorys || !category.includes(categorys))
    throw new Error("Invalid category");
  return await geralFetch(url + "products/category/" + categorys);
};

const getAllProductsWithRateAbove4 = async (rate) => {
  if (!rate || rate <= 0 || rate > 4) throw new Error("Invalid rate");
  const products = await getAllProducts("products");
  const result = products.filter((produto) => produto.rating.rate > rate);
  return result;
};

const getProductWithMoreCount = async (endpoint) => {
  const products = await getAllProducts(endpoint);
  return products.reduce((acc, el) =>
    acc.rating.count > el.rating.count ? acc : el
  );
};

const calculateAveragePrice = async (endpoint) => {
  const products = await getAllProducts(endpoint);
  const sumValues = products.reduce((acc, curr) => acc + curr.price, 0);
  return sumValues / products.length;
};

const getCheapestProduct = async (endpoint) => {
  const products = await getAllProducts(endpoint);
  return products.reduce((acc, curr) => (acc.price < curr.price ? acc : curr));
};

const getExpensiveProduct = async (endpoint) => {
  const products = await getAllProducts(endpoint);
  return products.reduce((acc, curr) => (acc.price > curr.price ? acc : curr));
};

// const showInConsole = async (callback) => console.log(await callback);

// showInConsole(getProductsWithId(2));
// // showInConsole(getAllCategories());
// // showInConsole(getAllProductsOfACategory());
// // showInConsole(getAllProductsWithRateAbove4());
// // showInConsole(getProductWithMoreCount());
// // showInConsole(calculateAveragePrice());
// // showInConsole(getCheapestProduct());
// // showInConsole(getExpensiveProduct());

export {
  getAllProducts,
  getProductsWithId,
  getAllCategories,
  getAllProductsOfACategory,
  getAllProductsWithRateAbove4,
  getProductWithMoreCount,
  calculateAveragePrice,
  getCheapestProduct,
  getExpensiveProduct,
};
