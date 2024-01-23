
// IMPORTACIONES
const EXPRESS = require("express");
const {connectDB} = require("./src/config/database/connectDB.js")
const { userRouter } = require("./src/routes/users.routes.js");
require("dotenv").config();

// INSTANCIAS
const app = EXPRESS();
const PUERTO = process.env.PUERTO;
connectDB()

// MIDDLEWARES
app.use(EXPRESS.json());

// RUTAS
app.use("/users", userRouter);
app.listen(PUERTO, () => {
  console.log(`${PUERTO} listening`);
});
