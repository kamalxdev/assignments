

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const card=new Schema({
    name: String,
    description: String,
    interest: String,
    linkedin: String,
    twitter: String,
})


const model= mongoose.model('card',card);

module.exports = model;