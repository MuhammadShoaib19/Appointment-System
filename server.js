const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const connectDB = require("./config/db");
const path = require("path");


//dotenv conig
require('dotenv').config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));


// app.use(express.static(path.join(__dirname, "./client/build")));

// app.all("*", function (_, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"), function (error) {
//     res.status(500).send(error);
//   });
// });

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

//port
const port = process.env.PORT || 8000;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
