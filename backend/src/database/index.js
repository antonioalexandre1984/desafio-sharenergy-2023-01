const mongoose = require('mongoose');
mongoose.set("strictQuery", true); 

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
        .connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@sharenergy.w3ejrhj.mongodb.net/?retryWrites=true&w=majority`
        )
        .then(() => {
            console.log('Connected to MongoDB Atlas!');
        })
        .catch((error) => {
            console.log('Unable to connect to MongoDB Atlas!');
            console.error(error);
        }
            )
        

module.exports = mongoose;