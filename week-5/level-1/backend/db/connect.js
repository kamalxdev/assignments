const mongoose = require('mongoose');
require('dotenv').config();


module.exports = mongoose.connect(process.env.MONGO).then(() => { console.log("Database Connected"); });