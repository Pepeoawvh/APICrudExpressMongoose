const mongoose = require('mongoose');
 const connectDB = async ()=>{
 await mongoose.connect(process.env.MONGO_URI)
 console.log('conectados a la DB')
};

module.exports = {connectDB}