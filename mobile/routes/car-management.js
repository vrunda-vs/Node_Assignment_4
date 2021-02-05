var express = require("express");
var router = express.Router({
  caseSensitive: true,
});
var ensureToken = require('../../utilities/ensure-token.js');


/**
 *  User Login
 */
var userLoginCtrl = require('../controllers/user-management/login.js');
router.post("/login", function (req, res) {
  return userLoginCtrl.userLogin(req, res);
});

/**
 *  Get All Users
 */
var getAllcarCtrl = require('../controllers/user-management/get-all-car.js');
router.get("/all", ensureToken, function (req, res) {
  return getAllcarCtrl.getAllcar(req, res);
});

/**
 *  Get User By Id
 */
var getCarByIdCtrl = require("../controllers/user-management/get-car-by-id.js");
router.get("/:id", ensureToken, function (req, res) {
  return getCarByIdCtrl.getCarById(req, res);
});

module.exports = router;