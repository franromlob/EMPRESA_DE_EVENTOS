const mongoose = require("mongoose");

// Model Usuario
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
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
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ /** REGEX */,
      "Por favor ingresa un email válido",
    ],
  },
  password: {
    type: String,
    required: true,
    minlenght: [8, "La contraseña tiene que tener al menos 8 caracteres"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Creamos el Modelo
const User = mongoose.model("userSchema", "user");

module.exports = { User };
