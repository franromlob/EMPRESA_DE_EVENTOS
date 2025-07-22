const eventModel = require("../Models/eventosModel");

/** Creamos 'endPoint' para Agregar Eventos */
const addEvent = async (req, res) => {
  try {
    const { title, description, createdAt, location, ticketPrice, attendees } =
      req.body;

    const newEvent = new eventModel({
      title: title,
      description: description,
      createdAt: createdAt,
      location: location,
      ticketPrice: ticketPrice,
      attendees: attendees,
    });

    await newEvent.save();

    res.status(201).json({
      status: 201,
      message: "Evento creado con éxito",
      data: newEvent,
    });
  } catch (error) {
    res.status(409).json({
      status: "failed",
      message: "Error al crear el evento",
      error: error.message,
    });
  }
};

module.exports = { addEvent };
