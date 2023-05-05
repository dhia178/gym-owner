var express = require("express");
var { addUser, deleteUser, getUsers, updateUser } =require( "../controllers/user.js")

const router = express.Router()

router.get("/", getUsers)

router.post("/", addUser)

router.put("/:ID", updateUser)

router.delete("/:ID", deleteUser)

module.exports=router