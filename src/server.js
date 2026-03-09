require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || "localhost";

// Config template engine
configViewEngine(app);

// Router
app.use("/", webRoutes);

// test connection
connection.query("SELECT * FROM Users", function (err, results, fields) {
  console.log(results);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
