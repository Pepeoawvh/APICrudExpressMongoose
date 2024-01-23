// importaciones
const { response } = require("express");
const { User } = require("../models/user.model.js");

// controladores
const registerUser = async (req, res) => {
  const { nombreCompleto, correo, rut, contrasena } = req.body;
  if (!nombreCompleto || !correo || !contrasena || !rut) {
   return res.status(403).json({ error: "complete los campos" });
  }
  try {
    const nuevoUsuario = new User({
      nombreCompleto: nombreCompleto,
      correo: correo,
      rut: rut,
      hashContrasena: contrasena,
    });
    await nuevoUsuario.save();
  return  res.status(201).json({
      mensaje: "Registro exitoso",
      status: "OK",
      data: nuevoUsuario,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(403).json({
        mensaje: "Rut o Correo ya existe, por favor ingrese otro",
      });
    }
   return res.status(500).json({
      mensaje: "ERROR DE SERVIDOR",
    });
  }
};

const editUser = async(req, res) => {};

const deleteUser = async (req, res) => {};

const getUserByEmail = async (req, res) => {
  const {correo} = req.body
  if (!correo) {
  return  res.status(403).json({ error: "Debe ingresar un correo" });
  }
  try {
    const usuarioEncontrado= await User.findOne({correo:correo})
    if (!usuarioEncontrado) {
     return res.status(404).json({
        mensaje: `no existe usuario con el correo ${correo}`
      })
    }
    return res.status(200).json({
      mensaje: 'Usuario encontrado',
      data: usuarioEncontrado
    })
  } catch (error) {
    console.log(error)
   return res.status(500).json({
      mensaje: "ERROR DE SERVIDOR",
    });
  }

};

const logInUser = async (req, res) => {};

module.exports = {
  registerUser,
  editUser,
  deleteUser,
  getUserByEmail,
  logInUser,
};
