var express = require("express");
var router = express.Router();

const {
  createUser,
  getAllUser,
  getOneUser,
  editOneCustomer,
  loginCustomer
} = require("../controller/customerController");

/* GET users listing. */
router
  .post("/add", createUser)
  .get("/", getAllUser)
  .get("/:id", getOneUser)
  .put("/:id", editOneCustomer)
  .post("/login", loginCustomer)


module.exports = router;
