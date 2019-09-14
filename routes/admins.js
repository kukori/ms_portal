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

        res.json(admin);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// @route   PUT api/admins/:id
// @desc    Edit admin
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const {firstName, lastName, email} = req.body;

    const adminFields = {};
    if(firstName) adminFields.firstName = firstName;
    if(lastName) adminFields.lastName = lastName;
    if(email) adminFields.email = email;

    try {
        let admin = await Admin.findById(req.params.id);
        if(!admin) return res.status(404).json({ msg: "Admin not found"}); 

        // if(admin.user.toString() !== req.user.id) {
        //     return res.status(401).json({ msg: "Not authorized"});
        // }

        admin = await Admin.findByIdAndUpdate(req.params.id,
            { $set: adminFields},
            { new: true });

        res.json(admin);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// @route   DELETE api/admins/:id
// @desc    Delete admin
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let admin = await Admin.findById(req.params.id);
        if(!admin) return res.status(404).json({ msg: "Admin not found"}); 

        // if(admin.id === req.admin.id) {
        //     return res.status(401).json({ msg: "Not authorized"});
        // }

        await Admin.findByIdAndRemove(req.params.id);

        res.json({ msg: "Admin removed" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;