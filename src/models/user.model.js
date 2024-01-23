const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema ( {
  nombreCompleto: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  correo: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: [
      /.+\@.+\..+/,
      "Por favor ingrese un correo válido",
    ] /* expresion regular */,
    lowercase: true,
  },
  hashContrasena: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    trim: true,
  },
  fechaNacimiento: {
    type: Date,
  },
  rut: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{7,8}-[kK\d]$/, "Por favor ingrese un RUT válido"],
  },
  rol: {
    type: String,
    enum: ["usuario", "admin", "vendedor"],
    default: "usuario",
  },
  estadoCuenta: {
    type: String,
    enum: ["activo", "inactivo", "suspendido"],
    default: "inactivo",
  },
  ultimoAcceso: {
    type: Date,
    default: Date.now,
  },
  tarjetasAsociadas: [{ type: String }],
  historialCompras: [
    {
      compraID: Schema.Types.ObjectId,
    //   ref: "Compra",
    },
  ],
  preferencias: [{ type: String }],
  carrito: [
    {
      carritoID: Schema.Types.ObjectId,
    //   ref: "Carrito",
    }],
});
// en mongoose.model("aqui va el nombre de la coleccion o del modelo","esquema")
const User = mongoose.model("User",userSchema);

module.exports = {User}