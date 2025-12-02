import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService,
} from "../services/products.services.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error interno del servidor al obtener productos" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const product = await getProductByIdService(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Porducto no encontrado" });
      }
    } else {
      res.status(404).json({ message: "ID no encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error interno del servidor al obtener producto por ID" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await createProductService(productData);
    res.status(200).json(newProduct);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error interno del servidor al crear producto" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      await deleteProductService(id);
      res.sendstatus(200);
    } else {
      res.status(404).json({ message: "ID no encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error interno del servidor al eliminar producto" });
  }
};
