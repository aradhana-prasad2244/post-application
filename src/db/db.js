const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect('mongodb+srv://aradhanaprasad2210:JOTdiEDaNcLoS6h6@notescluster.rlsbkju.mongodb.net/project-1');
    console.log("connected to DB");
};

module.exports = connectDB