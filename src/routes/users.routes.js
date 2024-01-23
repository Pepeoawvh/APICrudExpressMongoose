const express = require("express");
const userRouter = express.Router();
const {registerUser,editUser,deleteUser,getUserByEmail,logInUser} = require ("../controllers/users.controller.js")


userRouter.post("/register",registerUser);

userRouter.patch("/edit",editUser);

userRouter.delete("/delete",deleteUser);

userRouter.get("/get",getUserByEmail);

userRouter.post("/login",logInUser);


module.exports = { userRouter };
