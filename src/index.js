const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const favicon = require("express-favicon");

//Config
const app = express();
app.set("port", process.env.PORT || 3000);
app.use(favicon("./public/favicon.png"));

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log("Server on");
});
