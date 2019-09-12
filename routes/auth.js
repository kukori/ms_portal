const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
 
const Admin = require('../models/Admin');
 
// @route   GET api/auth
// @desc    Get logged in admin
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id).select('-password');
        res.json(admin);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/auth
// @desc    Auth admin & get token
// @access  Public
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 })
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    const {email, password} = req.body;

    try {
        let admin = await Admin.findOne({ email });

        if(!admin) {
            res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if(!isMatch) {
            res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            admin: {
                id: admin.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 36000, 
        }, (error, token) => {
            if(error) throw error;
            res.json({token: token});
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;