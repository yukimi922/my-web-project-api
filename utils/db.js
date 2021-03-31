const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/webproject", { useNewUrlParser: true, useUnifiedTopology: true },);
const db = mongoose.connection;
db.on("open", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("mongodb is connected");
  }
})