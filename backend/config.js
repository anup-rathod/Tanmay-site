const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product.js')
dotenv.config()

// const URL = process.env.MONGODB_URI
mongoose.set('strictQuery', true)
// const products = [
//     {
//         name: "Product 1",
//         brand: "Mumbai",
//         price: 100,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/Maharastrian/img1.jpeg",
//         rating: 4.5,
//         type: "maharastrian",
//         author: "",
//         description: "Beautiful jewelry piece",
//         gender: "Unisex"
//     },
//     {
//         name: "Product 2",
//         brand: "Mumbai",
//         price: 200,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/Maharastrian/img2.jpeg",
//         rating: 4.0,
//         type: "maharastrian",
//         author: "",
//         description: "Maharastrain Jewellery item",
//         gender: "Female"
//     },
//     {
//         name: "Product 3",
//         brand: "Pune",
//         price: 250,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/maharastrian/img3.jpeg",
//         rating: 4.0,
//         type: "maharastrian",
//         author: "",
//         description: "Maharastrain Jewellery item",
//         gender: "Female"
//     },
//     {
//         name: "Product 4",
//         brand: "Pune",
//         price: 300,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/Maharastrian/img4.jpeg",
//         rating: 4.0,
//         type: "maharastrian",
//         author: "",
//         description: "Maharastrain Jewellery item",
//         gender: "Female"
//     },
//     {
//         name: "Product 5",
//         brand: "Mumbai",
//         price: 150,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/Maharastrian/img5.jpeg",
//         rating: 4.9,
//         type: "maharastrian",
//         author: "",
//         description: "Maharastrain Jewellery item",
//         gender: "Female"
//     },
//        {
//         name: "Product 6",
//         brand: "Mumbai",
//         price: 100,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/Maharastrian/img6.jpeg",
//         rating: 4.5,
//         type: "maharastrian",
//         author: "",
//         description: "Beautiful jewelry piece",
//         gender: "Unisex"
//     },
//     {
//         name: "Product 7",
//         brand: "Mumbai",
//         price: 200,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/Maharastrian/img7.jpeg",
//         rating: 4.0,
//         type: "maharastrian",
//         author: "",
//         description: "Maharastrain Jewellery item",
//         gender: "Female"
//     },
//     {
//         name: "Product 8",
//         brand: "Pune",
//         price: 250,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/maharastrian/img8.jpeg",
//         rating: 4.0,
//         type: "maharastrian",
//         author: "",
//         description: "Maharastrain Jewellery item",
//         gender: "Female"
//     },
//     {
//         name: "Product 9",
//         brand: "Pune",
//         price: 300,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/Maharastrian/img9.jpeg",
//         rating: 4.0,
//         type: "maharastrian",
//         author: "",
//         description: "Maharastrain Jewellery item",
//         gender: "Female"
//     },
//     {
//         name: "Product 10",
//         brand: "Mumbai",
//         price: 150,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/Maharastrian/img10.jpeg",
//         rating: 4.9,
//         type: "maharastrian",
//         author: "",
//         description: "Maharastrain Jewellery item",
//         gender: "Female"
//     },
//     {
//         name: "Product 10",
//         brand: "Mumbai",
//         price: 150,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/Maharastrian/img11.jpeg",
//         rating: 4.9,
//         type: "maharastrian",
//         author: "",
//         description: "Maharastrain Jewellery item",
//         gender: "Female"
//     },
//     {
//         name: "Product 10",
//         brand: "Mumbai",
//         price: 150,
//         category: "maharastrian",
//         image: "http://localhost:5000/images/Maharastrian/img12.jpeg",
//         rating: 4.9,
//         type: "maharastrian",
//         author: "",
//         description: "Maharastrain Jewellery item",
//         gender: "Female"
//     },
// ];

// const seedProducts = async () => {
//     try {
//         await Product.deleteMany({}); // Clear existing data
//         await Product.insertMany(products); // Insert new data
//         console.log("Products inserted successfully");
//     } catch (err) {
//         console.error("Error inserting products:", err);
//     } finally {
//         mongoose.connection.close();
//     }
// };
// seedProducts();


// const products = [
//     // Simple Oxidise Jewellery
//     {
//         name: "Simple Oxidise 1",
//         brand: "Mumbai",
//         price: 1500,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 1.jpg",
//         rating: 4.5,
//         type: "oxidise",
//         description: "Elegant oxidise piece perfect for any occasion.",
//         gender: "Female"
//     },
//     {
//         name: "Simple Oxidise 2",
//         brand: "Mumbai",
//         price: 1200,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 2.jpg",
//         rating: 4.0,
//         type: "oxidise",
//         description: "Stylish oxidise piece with intricate design.",
//         gender: "Female"
//     },
//     {
//         name: "Simple Oxidise 3",
//         brand: "Pune",
//         price: 900,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 3.jpg",
//         rating: 4.2,
//         type: "oxidise",
//         description: "Delicate oxidise piece that complements any outfit.",
//         gender: "Unisex"
//     },
//     {
//         name: "Simple Oxidise 4",
//         brand: "Pune",
//         price: 1100,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 4.jpg",
//         rating: 4.3,
//         type: "oxidise",
//         description: "Classic oxidise piece with timeless appeal.",
//         gender: "Female"
//     },
//     {
//         name: "Simple Oxidise 5",
//         brand: "Mumbai",
//         price: 700,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 5.jpg",
//         rating: 4.5,
//         type: "oxidise",
//         description: "Beautiful oxidise piece for daily wear.",
//         gender: "Female"
//     },
//     {
//         name: "Simple Oxidise 6",
//         brand: "Mumbai",
//         price: 850,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 6.jpg",
//         rating: 4.4,
//         type: "oxidise",
//         description: "Elegant oxidise piece with a modern touch.",
//         gender: "Unisex"
//     },
//     {
//         name: "Simple Oxidise 7",
//         brand: "Mumbai",
//         price: 600,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 7.jpg",
//         rating: 4.1,
//         type: "oxidise",
//         description: "Minimalist oxidise piece for understated elegance.",
//         gender: "Female"
//     },
//     {
//         name: "Simple Oxidise 8",
//         brand: "Pune",
//         price: 950,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 8.jpg",
//         rating: 4.3,
//         type: "oxidise",
//         description: "Stylish oxidise piece for a chic look.",
//         gender: "Female"
//     },
//     {
//         name: "Simple Oxidise 9",
//         brand: "Pune",
//         price: 1000,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 9.jpg",
//         rating: 4.6,
//         type: "oxidise",
//         description: "Stunning oxidise piece with detailed craftsmanship.",
//         gender: "Unisex"
//     },
//     {
//         name: "Simple Oxidise 10",
//         brand: "Mumbai",
//         price: 750,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 10.jpg",
//         rating: 4.2,
//         type: "oxidise",
//         description: "Charming oxidise piece for everyday wear.",
//         gender: "Female"
//     },
//     {
//         name: "Simple Oxidise 11",
//         brand: "Mumbai",
//         price: 850,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 11.jpg",
//         rating: 4.5,
//         type: "oxidise",
//         description: "Elegant oxidise piece with a sophisticated design.",
//         gender: "Female"
//     },
//     {
//         name: "Simple Oxidise 12",
//         brand: "Mumbai",
//         price: 950,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 12.jpg",
//         rating: 4.6,
//         type: "oxidise",
//         description: "Beautiful oxidise piece with intricate details.",
//         gender: "Unisex"
//     },
//     {
//         name: "Simple Oxidise 13",
//         brand: "Pune",
//         price: 1200,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 13.jpg",
//         rating: 4.4,
//         type: "oxidise",
//         description: "Delicate oxidise piece with a modern twist.",
//         gender: "Female"
//     },
//     {
//         name: "Simple Oxidise 14",
//         brand: "Pune",
//         price: 1100,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 14.jpg",
//         rating: 4.3,
//         type: "oxidise",
//         description: "Stylish oxidise piece for any occasion.",
//         gender: "Female"
//     },
//     {
//         name: "Simple Oxidise 15",
//         brand: "Mumbai",
//         price: 800,
//         category: "Simple Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 15.jpg",
//         rating: 4.2,
//         type: "oxidise",
//         description: "Elegant oxidise piece with a classic design.",
//         gender: "Unisex"
//     },
//     {
//         name: "Designer Oxidise 1",
//         brand: "Mumbai",
//         price: 1800,
//         category: "Designer Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 16.jpg",
//         rating: 4.7,
//         type: "oxidise",
//         description: "Designer oxidise piece with intricate craftsmanship.",
//         gender: "Female"
//     },
//     {
//         name: "Designer Oxidise 2",
//         brand: "Mumbai",
//         price: 1500,
//         category: "Designer Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 17.jpg",
//         rating: 4.6,
//         type: "oxidise",
//         description: "Exquisite oxidise piece with detailed work.",
//         gender: "Female"
//     },
//     {
//         name: "Designer Oxidise 3",
//         brand: "Pune",
//         price: 1400,
//         category: "Designer Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 18.jpg",
//         rating: 4.5,
//         type: "oxidise",
//         description: "Luxurious oxidise piece with elegant design.",
//         gender: "Female"
//     },
//     {
//         name: "Designer Oxidise 4",
//         brand: "Pune",
//         price: 1600,
//         category: "Designer Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 19.jpg",
//         rating: 4.7,
//         type: "oxidise",
//         description: "Sophisticated oxidise piece with modern flair.",
//         gender: "Female"
//     },
//     {
//         name: "Designer Oxidise 5",
//         brand: "Mumbai",
//         price: 1700,
//         category: "Designer Oxidise Jewellery",
//         image: "http://localhost:5000/images/Oxidise/pic 20.jpg",
//         rating: 4.8,
//         type: "oxidise",
//         description: "Stunning oxidise piece with a designer touch.",
//         gender: "Female"
//     },
// ];


// const seedProducts = async () => {
//     try {
//         // await Product.deleteMany({}); // Clear existing data
//         await Product.insertMany(products); // Insert new data
//         console.log("Products inserted successfully");
//     } catch (err) {
//         console.error("Error inserting products:", err);
//     } finally {
//         mongoose.connection.close();
//     }
// };
// seedProducts();

const connectToMongo = async () => {
    try {
        const connectionString = "mongodb+srv://anuprathod2712:Password1@cluster0.x4ktl.mongodb.net";
        if (!connectionString) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        const connectionInstance = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection FAILED', error);
        process.exit(1);
    }
}

module.exports = connectToMongo;