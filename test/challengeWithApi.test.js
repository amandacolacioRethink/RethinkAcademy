import {
  geralFetch,
  getAllProducts,
  getProductsWithId,
  getAllCategories,
  getAllProductsOfACategory,
  getAllProductsWithRateAbove4,
  getProductWithMoreCount,
  calculateAveragePrice,
  getCheapestProduct,
  getExpensiveProduct,
} from "../challengeWithApi";
const { test, expect } = require("@jest/globals");

describe("getAllProducts", () => {
  it("should return all the products", async () => {
    const result = await getAllProducts("products");
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: expect.any(Number) }),
      ])
    );
  });

  it("should return an array with 20 elements", async () => {
    const result = await getAllProducts("products");
    expect(result.length).toEqual(20);
  });

  it("should return an error if the endpoint isn't right", async () => {
    try {
      const result = await getAllProducts("product");
      expect(typeof result).toBe("object");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'products'");
    }
  });
});

describe("getProductById", () => {
  it("should return the product of the given id", async () => {
    const param = 1;
    expect(typeof param).toBe("number");
    const result = await getProductsWithId(param);
    expect(result).toMatchObject({ id: expect.any(Number) });
  });

  it("should return an error if the ID is invalid", async () => {
    try {
      await getProductsWithId(21);
    } catch (error) {
      expect(error.message).toBe("Invalid ID");
    }
  });
});

describe("getAllCategories", () => {
  it("should return an array with all categories", async () => {
    const result = await getAllCategories("categories");
    expect(result).toEqual(
      expect.arrayContaining([
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
      ])
    );
  });

  it("should return an error if endpoint is wrong", async () => {
    try {
      await getAllCategories("wrong");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'categories'");
    }
  });
});

describe("getAllProductsOfACategory", () => {
  it("should return all items of the given category", async () => {
    const result = await getAllProductsOfACategory("jewelery");
    expect(result.length).toBe(4);
  });

  it("should return an error it the given category is invalid", async () => {
    try {
      await getAllProductsOfACategory("wrong");
    } catch (error) {
      expect(error.message).toBe("Invalid category");
    }
  });
});

describe("getAllProductsWithRateAbove4", () => {
  it("should return all products over the given rate", async () => {
    const result = await getAllProductsWithRateAbove4(4);
    expect(result.length).toBe(7);
  });

  it("should return an error if the given rate is invalid", async () => {
    try {
      await getAllProductsWithRateAbove4(0);
    } catch (error) {
      expect(error.message).toBe("Invalid rate");
    }
  });
});

describe("getProductWithMoreCount", () => {
  it("should return the product with most counts", async () => {
    const result = await getProductWithMoreCount("products");
    expect(result.rating.count).toBe(679);
  });

  it("should return an error if the endpoint is wrong", async () => {
    try {
      await getProductWithMoreCount("product");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'products'");
    }
  });
});

describe("calculateAveragePrice", () => {
  it("should return the average price of all products", async () => {
    const result = Math.round(await calculateAveragePrice("products"));
    expect(result).toEqual(162);
  });

  it("should return an error if the endpoint is wrong", async () => {
    try {
      await calculateAveragePrice("product");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'products'");
    }
  });
});

describe("getExpensiveProduct", () => {
  it("should return the more expensive of all products", async () => {
    const result = await getExpensiveProduct("products");
    expect(result.price).toEqual(999.99);
  });

  it("should return an error if the endpoint is wrong", async () => {
    try {
      await getExpensiveProduct("product");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'products'");
    }
  });
});

describe("getCheapestProduct", () => {
  it("should return the cheapest of all products", async () => {
    const result = await getCheapestProduct("products");
    expect(result.price).toEqual(7.95);
  });

  it("should return an error if the endpoint is wrong", async () => {
    try {
      await getCheapestProduct("product");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'products'");
    }
  });
});
