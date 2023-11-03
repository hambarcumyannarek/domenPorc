const express = require('express');

const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home.ejs', { name: "Narek" })
})

app.listen(process.env.PORT, function () {
    console.log('your server is calling on this port http://localhost:' + process.env.PORT);
})
