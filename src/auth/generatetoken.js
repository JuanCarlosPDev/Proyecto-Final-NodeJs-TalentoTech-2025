import jwt from "jsonwebtoken"; // Generar tokens JWT
import "dotenv/config";

const secret_key = process.env.JWT_SECRET_KEY || "MiClaveSuperSecretaParaFirmarTokens1234567890";

/* ----- Función para generar un token ----- */
export const generateToken = (userData) => {
  const user = { id: userData.id, email: userData.email };
  const expiration = { expiresIn: "1h" };
  return jwt.sign(user, secret_key, expiration);
};
