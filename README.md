# 🛒 Proyecto Final Back-End Node.js | API Rest de Productos | Talento Tech 2025

Este proyecto forma parte del Trabajo Final con Node.js del curso Talento Tech 2025.

Consiste en el desarrollo de una API REST para una tienda en línea, construida con Node.js y Express.js, cumpliendo con los requisitos de arquitectura escalable (Rutas, Controladores, Servicios, Modelos) y seguridad mediante autenticación JWT.

## 📋 Descripción del Proyecto

Esta es una **API Rest** que permite operaciones CRUD (Crear, Leer, Eliminar) sobre el catálogo de productos. La persistencia de datos se gestiona a través de la base de datos en la nube **Firestore de Firebase**.

El proyecto implementa una **capa de autenticación** para resguardar la seguridad de las operaciones sensibles, protegiendo las rutas de creación y eliminación con un **Bearer Token (JWT)**.

## 🚀 Características Principales

- ✅ **CRUD** para productos.
- 🔒 **Autenticación JWT** para login y protección de rutas.
- ⚛️ **Arquitectura Escalable** separada en capas (Rutas, Controladores, Servicios, Modelos).
- ☁️ **Base de Datos en la Nube:** Conexión y operaciones con **Firestore (Firebase)**.
- ⚙️ **Manejo de Errores:** Control de estados HTTP como 404, 401, 403, 400 y 500.
- 📦 **ESModules** habilitados para sintaxis moderna de JavaScript.

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución.
- **Express**: Framework para la creación del servidor web.
- **Firebase/Firestore**: Base de datos en la nube.
- **jsonwebtoken (JWT)**: Para la generación y validación de Bearer Tokens.
- **dotenv**: Para la gestión de variables de entorno seguras.
- **CORS** y **body-parser**: Middlewares esenciales del servidor.
- **Vercel**: Listo para desplegar en Vercel.

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior recomendada).
- npm
- Una cuenta de Firebase con un proyecto y una colección llamada `products` configurada.

### Pasos de Instalación

1.  Clona el repositorio:

    ```bash
    git clone <url-del-repositorio>
    cd proyecto-api-productos
    ```

2.  Instala las dependencias necesarias:

    ```bash
    npm install
    ```

3.  Crea el archivo de variables de entorno **`.env`** en la raíz del proyecto y configúralo con tus credenciales:

    ```bash
    # .env
    PORT=3000

    # Credenciales de Firebase (Obtenidas de tu proyecto)
    FIREBASE_API_KEY="..."
    FIREBASE_AUTH_DOMAIN="..."
    FIREBASE_PROJECT_ID="tu-id-proyecto"
    # ... otras claves de Firebase
    ```

4.  Inicia el servidor:

    ```bash
    npm run start
    ```

    El servidor estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

    ```
    ENTREGA/
    ├── index.js                         # Punto de entrada de la aplicación
    ├── package.json                     # Dependencias y scripts
    ├── vercel.json                      # Configuración de Vercel
    ├── .env                             # Variables de entorno (no incluído en git)
    └── src/
        ├── auth/
        │   └── genetatetoken.js         # Token secreto
        ├── configs/
        │   └── firebase.config.js       # Inicialización de Firebase
        │
        ├── controllers/
        │   ├── auth.controllers.js      # Lógica de autenticación
        │   └── products.controllers.js  # Lógica de productos
        │
        ├── middlewares/
        │   └── auth.middlewares.js      # Middleware de JWT
        │
        ├── models/
        │   └── products.models.js       # Esquema/modelo de producto
        │
        ├── routes/
        │   ├── auth.routes.js           # Rutas de autenticación
        │   └── products.routes.js       # Rutas de productos
        │
        └──services/
            └── products.services.js     # Servicios de productos
    ```

## 👨‍💻 Autor
   Juan Pevé - Curso Node JS 2025

## 📝 Licencia
    Este proyecto está bajo la licencia MIT   