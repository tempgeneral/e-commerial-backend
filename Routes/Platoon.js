const express = require("express")
const router = express.Router()
const Plantoon = require("../Model/Platoon")
router.post('/Plantoon', (req, res) => {

    const { fullName, stateCode, AmountPay, createdAt} = req.body;
    const newOrder = new Plantoon({
        fullName:fullName,
        stateCode:stateCode,
        AmountPay:AmountPay,
        createdAt:createdAt
      });
    
      // Save the new order
      newOrder
        .save()
        .then(() => {
          console.log("Order was successfully saved");
          res.status(201).send("Order was successfully saved");
        })
        .catch((err) => {
          console.error("Error while trying to save the order:", err);
          res.status(500).send("An error occurred while saving the order");
        });

})

router.get('/Plantoon', (req, res) => {
    Plantoon.find().then((user) => {
        res.json(user)
    }).catch((err) => {
        console.log(err)
    })
})




module.exports =  router