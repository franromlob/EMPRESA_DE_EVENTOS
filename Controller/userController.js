/** Importamos: el modelo en el controlador, donde vamos
 * a hacer las peticiones a la BBDD
 */
const userModel = require("../Models/userModel");

const bcrypt = require("bcrypt");

/** Creamos el endPoint para añadir usuario */
const addUser = async (req, res) => {
  try {
    const { name, lastName, email, password, createdAt } = req.body;

    const user = new userModel({
      name: name,
      lastName: lastName,
      email: email,
      password: await bcrypt.hash(password, 10),
      createdAt: createdAt,
    });

    await user.save();

    res.status(201).json({
      status: 201,
      message: "Nuevo usuario creado correctamente",
      data: user,
    });
  } catch (error) {
    res.status(409).json({
      status: "failed",
      message: "El usuario ya existe",
      error: error.message,
    });
  }
};

module.exports = { addUser };
