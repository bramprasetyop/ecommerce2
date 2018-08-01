const Item = require("../model/itemModel");

/*
function afterUpload (req, res, next) {
  let link = req......
  let { brand, price } = req.body
  item.create({
    brad,
    price, 
    url
  })
  .then(() => {
    res.status(201)
  })

  res.send({
      status: 200,
      message: "Your file is successfully uploaded",
      link: 
    });
}
*/

function createItem(req, res) {
  let obj = {
    brand: req.body.brand,
    price: req.body.price,
    image: req.file.cloudStoragePublicUrl,
    category: req.body.category
  }

  Item.create(obj).then(items => {
    res.status(200).json({
      message: "add new item success",
      items
    });
  });
}

function getAllItem(req, res) {
  Item.find().then(items => {
    res.status(200).json({
      message: "get all data success",
      items
    });
  });
}

function findOneItem(req, res) {
  Item.findOne({
    _id: req.params.id
  }).then(items => {
    res.status(200).json({
      message: "get one data success",
      items
    });
  });
}

function editItem(req, res) {
  let obj = {
    brand: req.body.brand,
    price: req.body.price,
    image: req.body.image
  };

  Item.findByIdAndUpdate(req.params.id, obj).then(items => {
    res.status(200).json({
      message: "update one data success",
      items
    });
  });
}

function deleteItem(req, res) {
  Item.findOneAndRemove({
    _id: req.params.id
  }).then(items => {
    res.status(200).json({
      message: "delete one data success",
      items
    });
  });
}
module.exports = {
  createItem,
  getAllItem,
  findOneItem,
  editItem,
  deleteItem
};