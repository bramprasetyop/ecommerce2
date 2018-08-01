var express = require("express");
var router = express.Router();
var images = require('../helpers/images')
const {
  createItem,
  getAllItem,
  findOneItem,
  editItem,
  deleteItem
} = require("../controller/itemController");


var {
  logincheck
} = require("../helpers/auth");

/* GET item page. */
router
  .post("/",logincheck, images.multer.single("image"),
    //  authorization 
    images.sendUploadToGCS, createItem)
  .get("/items", getAllItem)
  .get("/items/:id", findOneItem)
  .put("/items/:id", editItem)
  .delete("/items/:id",logincheck, deleteItem)

module.exports = router;