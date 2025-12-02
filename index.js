/* ----- Imports ----- */
import express from "express";
import cors from "cors";
import "dotenv/config";

/* ----- Imports de Rutas ----- */
import productsRoutes from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

/* ----- Configuración del Servidor ----- */
const app = express();
const PORT = process.env.PORT || 3000; // Usa el puerto de .env o 3000 por defecto

// Restringe el acceso y habilita cookies.
const corsConfig = {
  origin: ["http://localhost:3000", "https://midominio.com"], // Dominios permitidos
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Cabeceras permitidas
  exposedHeaders: ["Content-Length"], // Cabeceras visibles al cliente
  credentials: true, // Habilitar credenciales
  maxAge: 600, // Cache preflight
  optionsSuccessStatus: 204, // Respuesta preflight exitosa
};

/* ----- Middlewares Globales ----- */
app.use(cors(corsConfig)); // Configura CORS para habilitar peticiones de origen cruzado
app.use(express.json()); // Configura body-parser para interpretar JSON en el body de las peticiones

/* ----- Registro de las solicitudes ----- */
app.use((req, res, next) => {
  console.log(`Datos received at:  ${req.method} ${req.url}`);
  next();
});

/* ----- Conexión de Rutas ----- */
app.use("/api", authRoutes);
app.use("/api", productsRoutes);

// Presentación del servidor
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Proyecto Talento Tech</title>
    </head>
    <body>
        <h1 style="text-align: center; line-height: 1.5; color: blue">Talento Tech: Proyecto Final</h1>
        <h2 style="text-align: center; line-height: 1.5; color: blue">Servidor API REST - Gestión de productos</h2>
    </body>
    </html>
  `);
});

/* ----- Rutas Desconocidas ----- */
app.use((req, res, next) => {
  res.status(404).send({
    error: "Not Found",
    message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
  });
});

/* ----- Inicialización del Servidor ----- */
app.listen(PORT, () => {
  console.log(`🚀 Servidor API REST corriendo en http://localhost:${PORT}`);
});
