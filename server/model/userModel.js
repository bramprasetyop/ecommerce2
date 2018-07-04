const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

let customerSchema = new Schema({
  name: String,
  email: String,
  password: String

});

customerSchema.pre("save", function(next) {
  var user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

const customer = mongoose.model("customersECommerce", customerSchema);

module.exports = customer;