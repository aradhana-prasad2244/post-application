const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect('mongodb+srv://aradhanaprasad2210:qV02F1cGTxBqVrl7@notescluster.rlsbkju.mongodb.net/post-application');
    console.log('Connected to the DB');
}

module.exports = connectDB;