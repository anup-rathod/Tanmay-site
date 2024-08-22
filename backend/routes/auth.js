const express = require('express');
const jwt = require("jsonwebtoken");
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const authUser = require('../middleware/authUser');
const dotenv = require('dotenv');
const { deleteAllUserData } = require('../controller/deleteUser');
dotenv.config();

// Register Route
router.post('/register', [
    body('firstName', 'Enter a valid name').isLength({ min: 1 }),
    body('lastName', 'Enter a valid name').isLength({ min: 1 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    body('phoneNumber', 'Enter a valid phone number').isLength({ min: 10, max: 10 })
], async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    if (!firstName || !lastName || !email || !phoneNumber || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            phoneNumber,
            password: hashedPassword
        });

        await newUser.save();

        const authToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || 'secretPass', { expiresIn: '1h' });

        res.json({ success: true, authToken });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login Route
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({ success: false, error: "User not found" });
        }

        const passComp = await bcrypt.compare(password, user.password);
        if (!passComp) {
            return res.status(400).send({ success: false, error: "Invalid credentials" });
        }

        const authToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secretPass', { expiresIn: '1h' });

        res.send({ success: true, authToken });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send("Internal server error");
    }
});


// Get logged-in user details: GET "/api/auth/getuser"
router.get('/getuser', authUser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.send(user);
    } catch (error) {
        console.error('Get user error:', error);
        res.status(400).send("Something went wrong");
    }
});

// Update user details: PUT "/api/auth/updateuser"
router.put('/updateuser', authUser, async (req, res) => {
    try {
        const userDetails = JSON.parse(req.body.userDetails);
        const user = await User.findByIdAndUpdate(req.user.id, { $set: userDetails }, { new: true });
        if (user) {
            res.status(200).send({ success: true });
        } else {
            res.status(400).send("User Not Found");
        }
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).send("Something went wrong");
    }
});

// Delete user and user data: DELETE "/api/auth/delete/user/:userId"
router.delete('/delete/user/:userId', authUser, deleteAllUserData);

module.exports = router;
