const express = require('express');
const mysql = require('mysql');

const PORT = 5000;


const path = require('path');
const app = express();

// Указывает Express, где находятся статические файлы клиентской части
app.use(express.static(path.join(__dirname, 'dist')));

// Обрабатывает запросы на корневой URL и отправляет index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(PORT, () => console.log('SERVER STARTED' + PORT))
app.use(express.static('src'));
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database: "shop_db",
  password : '',
});
let db_items;
connection.connect();
let query = 'SELECT * FROM products'
connection.query(query, (err, result) => {
    console.log(err);
    db_items = result;
});
app.get('/bd', function (req, res) {
  res.send(db_items);
});
