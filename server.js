const express = require("express");
const mongoose = require("mongoose");

const Pizza = require("./models/testModel");

const PizzaController = require("./controllers/pizzaControllers");


const PORT = process.env.PORT || 27017;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test18", {
  useNewUrlParser: true,
  useFindAndModify: false,
   useUnifiedTopology: true 
});

mongoose.connection.on("connected", ()=>{
    console.log("connected")
});

app.get("/api/config", (req, res)=>{
        res.json({
            success:true,
        });
});

app.use(PizzaController);

// app.get("/api/pizzas", (req, res)=>{
//     Pizza.find({}).then((foundPizzas) =>{
//         res.json({
//            error:false,
//             data: foundPizzas,
//             message: "Retrieved All Pizzas "
//         });
//     });
// });


// app.post("/api/pizzas", (req, res)=>{
//     Pizza.create(req.body).then((createdPizza) =>{
//         res.json({
//             error:false,
//             data: createdPizza,
//             message:"Successfully created new Pizza"
        
//         })
//     }).catch((err) =>{
//         res.status({
//             error:true,
//             data:null,
//             message:"unable to create new pizza"
//         })
//     })
// });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });