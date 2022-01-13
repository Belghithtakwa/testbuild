require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path')

mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.on("connected", () => {
  console.log("DB Connected");
});
mongoose.connection.on("error", (err) => {
  console.log("DB Connection failed with - ", err);
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const testRoutes = require("./routes/test.routes")
app.use('/posts', testRoutes)
app.use( express.static( "./dist" ) );
app.use( "*", ( req, res ) => {
  res.sendFile( path.resolve("dist", "index.html" ) );
} );

const port = process.env.PORT || 8000;

app.listen(port, () => {
console.log(`server is running at port ${port}`);
});