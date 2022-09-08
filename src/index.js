const express = require("express");
const morgan = require("morgan");
//Config
const app = express();
app.set("port", process.env.PORT || 3000);



const cors=require("cors");


app.use(cors()) // Solved CORS Problem giving access to all links


// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log("Server on");
});
