const mongoose = require('mongoose');

//connecting mongoose
mongoose.connect(`mongodb://localhost:27017/deepnet-machine-test`);


const conSuccess = mongoose.connection;

conSuccess.once('open', () => {
    console.log("Database Connected");
})




module.exports = { mongoose };
