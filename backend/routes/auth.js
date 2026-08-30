const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const fetchuser = require('../middleware/fetchuser');


// ROUTE1. Create a User using :post "/api/auth/createuser". No login required
router.post('/createuser', [
  body("name", "Enter a valid name").isLength({ min: 3 }),
  body("email", "Enter a valid Email").isEmail(),
  body("password", "Enter a valid password").isLength({ min: 5 }),
], async (req, res) => {
  let success = false;
  //If there are errors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  // Check whether the user with this email exist already.
  let user = await User.findOne({ email: req.body.email })
  if (user) {
    return res.status(400).json({
      success, error: "E-mail already in use",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const secpassword = await bcrypt.hash(req.body.password, salt);

  // Create new user
  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: secpassword,
  });

  const data = {
    user: {
      id: user.id
    }
  }
  const authtoken = jwt.sign(data, JWT_SECRET);

  // res.json(user);
  success = true;
  res.json({ success, authtoken });
})

// ROUTE2. Authenticate a User using :post "/api/auth/login". No login required
router.post('/login', [
  body("email", "Enter a valid Email").isEmail(),
  body("password", "Enter a valid password").exists(),
], async (req, res) => {
  let success = false;
  //If there are errors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ success, error: "Please try to login with correct credentials", });
    }

    let passwordcompare = await bcrypt.compare(password, user.password)
    if (!passwordcompare) {
      return res.status(400).json({ success, error: "Please try to login with correct credentials", });
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.log(error);
    res.status(400).send("Some error occured");
  }
})


// ROUTE3. Get loggedin user Details using :post "/api/auth/getuser". login required
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(400).send("Some error occured");
  }
})

module.exports = router