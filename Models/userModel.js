/** Importamos mongoose para poder utilizarlo en el fichero y Schema */
const mongoose = require("mongoose");

// Model Usuario
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true /** Campo requerido */,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true /** Asegura que cada correo electrónico sea único en la bbdd */,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ /** REGEX */,
      "Por favor ingresa un email válido",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "La contraseña tiene que tener al menos 8 caracteres"],
  },
  createdAt: {
    type: Date,
    default: Date.now /** Asigna la fecha actual como valor por defecto */,
  },
});

// Creamos el Modelo
const User = mongoose.model("User", userSchema, "Users");

module.exports = { User };
