const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const fetchUser = (req, res, next) => {
    // Get the user from the jwt token and add the user id to the req object
    const token = req.header('Authorization');
    if (!token) {
        return res.status(400).send("Access denied");
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET || "secretPass");
        req.user = data; // Assuming the user ID is stored in the JWT payload as `id`
        next();
    } catch (error) {
        console.error("JWT verification failed:", error);
        res.status(400).send("Access denied");
    }
};

module.exports = fetchUser;
