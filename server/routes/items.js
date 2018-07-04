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




/* GET item page. */
router
  .post("/",images.multer.single("image"),
  //  authorization 
  images.sendUploadToGCS, createItem)
  .get("/items", getAllItem)
  .get("/items/:id", findOneItem)
  .put("/items/:id", editItem)
  .delete("/items/:id", deleteItem)

module.exports = router;
