const express = require("express");
const router = express.Router();
const Pizza = require("../models/testModel");


router.get("/api/pizzas", (req, res)=>{
    Pizza.find({}).then((foundPizzas) =>{
        res.json({
           error:false,
            data: foundPizzas,
            message: "Retrieved All Pizzas "
        });
    });
});


router.post("/api/pizzas", (req, res)=>{
    Pizza.create(req.body).then((createdPizza) =>{
        res.json({
            error:false,
            data: createdPizza,
            message:"Successfully created new Pizza"
        
        })
    }).catch((err) =>{
        res.status({
            error:true,
            data:null,
            message:"unable to create new pizza"
        })
    })
});

module.exports = router;