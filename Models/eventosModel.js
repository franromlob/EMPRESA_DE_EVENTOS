const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlenght: [100, "El título no puede superar los 50 caracteres"],
  },
  description: {
    type: String,
    required: [true, "Descripción obligatoria"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  ticketPrice: {
    type: Number,
    required: [true, "Debe introducir un precio"],
    min: [0, "El precio no puede ser negativo"],
  },
  attendees: {
    type: userSchema.Types.Object,
    ref: User,
    required: false,
  },
});

// Creamos el modelo
const User = mongoose.model("User", userSchema);
const Event = mongoose.model("User", eventSchema);

module.exports = User;
