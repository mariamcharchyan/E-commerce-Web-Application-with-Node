const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_generate = require('../jwt/jwt_generate');
const mailer = require('../mailer/mailer');
const { Users } = require('../models');
const fs = require('fs');
const path = require('path');

const SECRET = process.env.SECRET
const saltRounds = 10;



async function register_user(req, res) {
  try {
    console.log(req.body);
    const { firstName, lastName, age, gender, email, password } = req.body;
    let imagePath = path.join('uploads', 'seedUsersPhotos', 'user.png');
    if (req.file){
      imagePath = path.relative(process.cwd(), req.file.path);
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const hashed_password = await bcrypt.hash(password, salt);
    console.log({hashed_password:hashed_password});

    const user = await Users.findOne({ where: { email } });
    if (user) {
      return res.send(JSON.stringify({ status: 'Email already exists' }));
    }
   
    const newUser = await Users.create({
      image: imagePath,
      firstName,
      lastName,
      age,
      gender,
      email,
      password: hashed_password,
    });

    console.log(newUser);

    const token = jwt_generate.generateAccessToken(email,newUser.status);
    mailer.send_Mail(email, token);

    return res.send(JSON.stringify({ newUser, token}));
  } catch (error) {
    console.error(error);
    return res.send(JSON.stringify({ status: 'Error Registering' }));
  }
}



async function login_user(req, res) {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(201).json({ status: 'Wrong email' });
    }

    const match = await bcrypt.compare(password, user.password);
    console.log(user.password);
    console.log(match);
    if (!match) {
      return res.status(201).json({ status: 'Wrong password' });
    }

    const token = jwt_generate.generateAccessToken(email,user.status);
    return res.status(201).json({
      status: user.status,
      token 
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}



async function delete_user_id(req, res) {
  try {
    const user = await Users.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const imagePath = user.image; 

    await Users.destroy({ where: { id: req.params.id } });

    // Delete the user's image file if it exists
    if (imagePath) {
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error('Error deleting image file:', err);
        }
      });
    }

    return res.status(201).json({ successful: 'User deleted' });
  } catch (err) {
      return res.status(500).json({ error: err.message });
  }
}



async function get_user_by_email_and_password(req, res) {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(201).json({ status: 'Wrong email' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(201).json({ status: 'Wrong password' });
    } 

    // res.send(user);
    return res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}



async function get_all_users(req, res) {
  try {
    const users = await Users.findAll(); // Retrieve all users
    res.send(users); // Send the users as the response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}



module.exports = {
  register_user,
  login_user,
  delete_user_id,
  get_user_by_email_and_password,
  get_all_users
}