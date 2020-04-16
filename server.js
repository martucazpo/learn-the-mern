if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const PORT = process.env.PORT || 5000;
const db = process.env.DATABASE_URL;

const app = express();

mongoose
.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log("The (mon)goose is on the loose");
})
.catch(err => console.log(err));

app.use(express.json());
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(PORT, () => {
    console.log('The Server is ever listening on port: ' + PORT);
});