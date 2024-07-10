const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/toDoRoutes');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', authRoutes);
app.use('/api/todo', toDoRoutes);

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("DB Connected Successfully!");
}).catch(err => {
    console.log(err);
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
