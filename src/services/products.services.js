// Importamos las funciones del modelo
import {
  getProductsFromDB,
  getProductByIdFromDB,
  createProductInDB,
  deleteProductFromDB,
} from "../models/products.models.js";

export const getAllProductsService = async () => {
  return new Promise(async (res, rej) => {
    try {
      const productos = await getProductsFromDB();
      console.log(productos)
      res(productos);
    } catch (error) {
      rej();
    }
  });
};

export const getProductByIdService = async (id) => {
  return new Promise(async (res, rej) => {
    try {
      const product = await getProductByIdFromDB(id);
      res(product);
    } catch (error) {
      rej(error);
    }
  });
};

export const createProductService = async (productData) => {
  return new Promise(async (res, rej) => {
    try {
      const newProduct = await createProductInDB(productData);
      res(newProduct);
    } catch (error) {
      rej(error);
    }
  });
};


export const deleteProductService = async (id) => {
  return new Promise(async (res, rej) => {
    try {
      await deleteProductFromDB(id);
      res();
    } catch (error) {
      rej(error);
    }
  });
};
