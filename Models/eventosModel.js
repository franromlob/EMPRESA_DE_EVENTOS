const mongoose = require("mongoose");

// Model Event
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, "El título no puede superar los 50 caracteres"],
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" /** Referencia al modelo de usuario */,
  },
});

// Creamos el modelo
const Event = mongoose.model("Event", eventSchema, "Events");

module.exports = { Event };
