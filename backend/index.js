const connectTomongo = require('./db');
const express = require('express');
var cors = require('cors');
require('dotenv').config();
connectTomongo();

const app = express()
const port = 5001

app.use(cors({
    origin: "https://inotebook-notes.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "auth-token"]
}));

app.use(express.json())
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`)
})

module.exports = app;
