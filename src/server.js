require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || "localhost";

// Config template engine
configViewEngine(app);

// Router
app.use("/", webRoutes);

// test connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.query("SELECT * FROM Users", function (err, results, fields) {
  console.log(results);
  console.log("fields: ", fields);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
