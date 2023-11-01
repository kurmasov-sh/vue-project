console.log('123')
import express  from "express"
import mysql  from "mysql"

const PORT = 5000;

const app = express()

app.listen(PORT, () => console.log('SERVER STARTED' + PORT))

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database: "shop_db",
  password : '',
});

connection.connect();
let query = 'SELECT * FROM products'
connection.query(query, (err, result) => {
    console.log(err);
    console.log(result);
});

