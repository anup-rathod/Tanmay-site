const connectToMongo = require('./config');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const auth = require('./routes/auth.js');
const User = require('./models/User.js');
const cart = require('./routes/cart');
const wishlist = require('./routes/wishlist');
const product = require('./routes/product');
const review = require('./routes/review');
const paymentRoute = require('./routes/paymentRoute');
const forgotPassword = require('./routes/forgotPassword');
const AdminRoute = require('./routes/Admin/AdminAuth');
const dotenv = require('dotenv');
dotenv.config();

connectToMongo();

const port = 5000;
const app = express();

// Serve static files from the "frontend/build" directory
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// Serve static files from the "public" directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS Configuration
app.use(cors({
    origin: '*', // Default origin if not set
    credentials: true,
}));

// Serve React App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

// API Routes
app.use('/api/auth', auth);
app.use('/api/product', product);
app.use('/api/cart', cart);
app.use('/api/wishlist', wishlist);
app.use('/api/review', review);
app.use('/api/admin', AdminRoute);
app.use('/api', paymentRoute);
app.use('/api/password', forgotPassword);

app.listen(port, () => {
    console.log(`E-commerce backend listening at http://localhost:${port}`);
});
