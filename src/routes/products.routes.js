import { Router } from "express";

/* ----- Controladores ----- */
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/products.controllers.js";

// Importa el middleware de protección
import { authenticateToken } from "../middlewares/auth.middlewares.js";

const router = Router();

// Asigna las funciones a las rutas
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products/create", authenticateToken, createProduct);
router.delete("/products/:id", authenticateToken, deleteProduct);

export default router;
