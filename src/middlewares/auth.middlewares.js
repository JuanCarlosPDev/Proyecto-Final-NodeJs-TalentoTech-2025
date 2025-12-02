import jwt from "jsonwebtoken";
import "dotenv/config";

const JWT_SECRET =
  process.env.JWT_SECRET_KEY || "MiClaveSuperSecretaParaFirmarTokens1234567890";

// Middleware para proteger las rutas
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // El token viene en formato "Bearer [token]"
  const token = authHeader && authHeader.split(" ")[1];

  // Si el token está vacio
  if (!token) {
    return res.status(401).json({
      error: "Fallo de autenticación",
      message: "Acceso denegado. Se requiere un Token.",
    });
  }

  // Verifica el token JWT
  jwt.verify(token, JWT_SECRET, (err) => {
    // Si hay error en la verificación
    if (err) {
      return res.status(403).json({
        error: "Acceso denegado",
        message: "Token inválido o expirado.",
      });
    }
    next();
  });
};
