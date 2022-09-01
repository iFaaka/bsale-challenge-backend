const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//Config
const app = express();
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log("Server on");
});
