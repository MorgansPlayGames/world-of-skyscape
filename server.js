const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config/database');
const { User } = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;
const { tick } = require("./controllers/tickController")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

require('./config/passport')(User);

app.use(routes);

mongoose.connect(config.database);

const ticker = setInterval(tick, 10000)

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    
});