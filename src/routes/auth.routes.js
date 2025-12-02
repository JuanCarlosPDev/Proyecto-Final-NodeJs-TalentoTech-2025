import { Router } from "express";

/* ----- Controladores ----- */
import { login } from "../controllers/auth.controllers.js";

const router = Router();

// Asigna las funciones a la ruta
router.post("/login", login);

export default router;
