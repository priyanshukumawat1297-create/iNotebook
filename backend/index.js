const connectTomongo = require('./db');
const express = require('express');
var cors = require('cors');
require('dotenv').config();

connectTomongo();

const app = express();

app.use(cors({
    origin: "https://inotebook-notes.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "auth-token"]
}));

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;