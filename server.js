const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env'});

const app = require('./app');

// Define DB connection URI String
const DB = process.env.DATABASE_URI;

// Connect to DB
mongoose.connect(DB).then(con => {
    console.log('Connected w/ MongoDB');
})

// Define PORT
const PORT = process.env.PORT || 8000;

// Running the server
app.listen(PORT, () => {
    console.log(`Server is running on the PORT: ${PORT}`);
});
