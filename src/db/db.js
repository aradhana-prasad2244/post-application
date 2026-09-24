const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to the DB');
}

module.exports = connectDB;

// const mongoose = require('mongoose');

// async function connectDB() {
//     await mongoose.connect(process.env.MONGO_URI);

//     console.log('Connected to the DB');
//     console.log('Database:', mongoose.connection.name);
// }

// module.exports = connectDB;