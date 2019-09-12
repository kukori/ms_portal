const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
 
const Admin = require('../models/Admin');

// @route   GET api/admins
// @desc    Get admins
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const admins = await Admin.find().select('-password');
        res.json(admins);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/admins
// @desc    Creates an admin in the database
// @access  Private
router.post('/', [auth, [
    check('firstName', 'Please add first name').not().isEmpty(),
    check('lastName', 'Please add last name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password min 6 characters').isLength({ min: 6 })
  ]], 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }
    
    const {firstName, lastName, email, password} = req.body;

    try {
        let admin = await Admin.findOne({ email: email });

        if(admin) {
            return res.status(400).json({ msg: 'Admin already exists'})
        }

        admin = new Admin({ firstName, lastName, email, password });

        const salt = await bcrypt.genSalt(10);

        admin.password = await bcrypt.hash(password, salt);

        await admin.save();

        res.json({admin: admin});

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;