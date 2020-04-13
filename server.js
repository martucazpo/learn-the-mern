if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const PORT = process.env.PORT || 5000;
const db = process.env.DATABASE_URL;

const app = express();

mongoose
.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("The (mon)goose is on the loose");
})
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use('/api/items', items);

app.listen(PORT, () => {
    console.log('The Server is ever listening on port: ' + PORT);
});