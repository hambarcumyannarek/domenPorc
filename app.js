const express = require('express');
const { createPool } = require('mysql2/promise');
const app = express();

const pool = createPool({
    host: process.env.HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    user: process.env.USER
})

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const users = await pool.query('select * from users');
    console.log(users[0][0])
    res.render('home.ejs', { name: users[0][0].name, lastName: users[0][0].lastname })
})

app.listen(3001, function () {
    console.log('your server is calling on this port http://localhost:3001');
})
