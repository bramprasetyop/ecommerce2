const Customer = require("../model/userModel");
var bcrypt = require("bcrypt");
let saltRounds = 10;
var jwt = require('jsonwebtoken');

function createUser(req, res) {
  Customer.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(user => {
    res.status(200).json({
      message: "add new customer success",
      user
    });
  });
}

function getAllUser(req, res) {
  Customer.find().then(users => {
    res.status(200).json({
      message: "get all customers success",
      users
    });
  });
}

function getOneUser(req, res) {
  Customer.findOne({
    _id: req.params.id
  }).then(user => {
    res.status(200).json({
      message: "get one customers success",
      user
    });
  });
}

function editOneCustomer(req, res) {
  let obj = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  Customer.findByIdAndUpdate(req.params.id, obj).then(user => {
    res.status(200).json({
      message: "update user success",
      user
    });
  });
}

function deleteCustomer(req, res) {
  Customer.findByIdAndRemove(req.params.id).then(user => {
    res.status(200).json({
      message: "delete customer success"
    });
  });
}

function loginCustomer(req, res) {
  console.log(req.body);

  let emailCustomer = req.body.email;
  let pass = req.body.password;
  let salt = bcrypt.genSaltSync(saltRounds);
  let hash = bcrypt.hashSync(pass, salt);

  Customer.findOne({
    email: emailCustomer
  }).then(user => {
    // console.log(customers);

    let compare = bcrypt.compareSync(pass, user.password);
    if (compare) {
      jwt.sign({
          email: user.email
        },
        process.env.SECRET_KEY,
        (err, token) => {
          console.log(token);

          res.status(200).json({
            message: 'Logged In Successfully',
            token
          });
        }
      );
    }
  });
}

module.exports = {
  createUser,
  getAllUser,
  getOneUser,
  editOneCustomer,
  loginCustomer
};