require("dotenv").config();
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

function generateAccessToken(email,status) {
  return jwt.sign({email,status}, SECRET, { expiresIn: '36000s' });
}

module.exports = {generateAccessToken};