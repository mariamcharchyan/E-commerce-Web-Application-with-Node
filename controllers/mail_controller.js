const jwt = require('jsonwebtoken')
require("dotenv").config();
const SECRET = process.env.SECRET
const { Users } = require('../models/');

// const carts_controller = require('./carts_controller')

async function verify_user(req, res) {
  try {
    const token = req.params.code;
    const decoded = jwt.verify(token, SECRET);
    const user = await Users.findOne({ where: { email: decoded.email } });
    if (!user) {
      return res.send("User not found");
    }
    await user.update({ isVerified: true });
    return res.send('Is verified.');
  } catch (error) {
    console.error(error);
    return res.send('Error verifying user');
  }
}

module.exports = { verify_user };