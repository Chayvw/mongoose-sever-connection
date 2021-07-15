const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 27017;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://chay618:test18@test18.ewohp.mongodb.net/test18?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
   useUnifiedTopology: true 
});

mongoose.connection.on("connected", ()=>{
    console.log("connected")
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });