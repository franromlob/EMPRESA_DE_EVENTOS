require("dotenv").config();

const mongoose = require("mongoose");

// Importamos el módulo Express
const express = require("express");

// Crea una instancia de Express para poder acceder a todas las funcionalidades
// que nos proporciona 'express'
const app = express();

/** En este caso trabajamos con JSON por lo que analizamos sus archivos */
app.use(express.json());

/** Importamos la configuración para poder
 * acceder al fichero '.env'
 */
require("dotenv").config();

/** Recuperamos al url de conexión de mongodb del fichero env */
const url_mongodb = process.env.DATABASE_URL_DEV;
const PORT = process.env.PORT;

// Conectar a MongoDB usando async/await
async function connectDB() {
  try {
    await mongoose.connect(url_mongodb);
    console.log("✅ MongoDB se ha conectado exitosamente");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
}

// Llama a la función de conexión
connectDB();

// Escucha los eventos de conexión/desconexión/error de MongoDB
mongoose.connection.on("disconnected", () => {
  console.log("🔌 MongoDB se ha desconectado");
});

mongoose.connection.on("error", (err) => {
  console.error("💥 Error en la conexión de MongoDB:", err.message);
});

mongoose.connection.on("reconnected", () => {
  console.log("🔄 MongoDB se ha reconectado");
});

// --- Iniciar el Servidor ---

// El servidor "escucha" en el puerto 3000
// usando la función 'listen' de 'express'
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
