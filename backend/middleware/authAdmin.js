const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const User = require('../models/User');
dotenv.config();

const checkAdmin = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: "Access denied, no token provided" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET || "secretPass");
        req.user = data.user;

        const user = await User.findById(req.user.id);
        if (!user || !user.isAdmin) {
            return res.status(403).json({ error: "Access denied, not an admin" });
        }

        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid token" });
    }
}

module.exports = checkAdmin;
