const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require("mongoose");
const axios = require("axios")
require("./config/db")
const databaseSchema = require("./Model/Project")
const OrderSchema = require('./Model/Order')
const cors = require('cors');
const options = require('./Data/Categories')
const ProfileSchema = require('./Model/Profile')





const PORT = process.env.PORT || 4000

app.use(express.json()); // For parsing JSON data in request bodies
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/upload_Categories', (req, res) => {


    databaseSchema.find().then((user) => {
        res.json(user)
    }).catch((err) => {
        console.log(err)
    })
})
app.get('/Categories', (req, res) => {
res.json(options)
})
app.post('/Order', (req, res) => {
  
    const {cart} = req.body;
    const NewProduct = new OrderSchema({
      Order:cart
    })
    NewProduct.save({})
    .then(() => {
        console.log("it was successfully saved")
        res.send("you are welcome")
    })
    .catch((err) => console.log("there was an error while trying to upload the code"))

   
})

app.get('/Order', (req, res) => {
    OrderSchema.find().then((user) => {
        res.json(user)
    }).catch((err) => {
        console.log(err)
    })
    })


app.post('/upload_Categories/delete', (req, res) => {
// console.log(req.body)
const {id} = req.body

    databaseSchema.findOneAndDelete({_id:id})
    .then((user) => {
        if (user){
            console.log("item deleted")
        }
        else {
            console.log("item does not exist")
        }
    
    })
    .catch((err) => {
        console.log(err)
    })
})
app.get('/', (req, res) => {
res.send("you are welcome sdd")
})
app.post('/profileSignUp', (req, res) => {
    const   {firstName,
    lastName,
    phoneNumber,
    email } = req.body

    const NewProfile = new ProfileSchema({
        firstName: firstName,
        lastName:lastName,
        phoneNumber:phoneNumber,
        email:email
    })

    NewProfile.save({})
        .then(() => {
            console.log("it was successfully saved")
            res.send("you are welcome")
        })
        .catch((err) => console.log("there was an error while trying to upload the code"))


   
})

app.post("/upload_Categories", (req, res) => {
    const { selectedOption,
        subselectedOption,
        descriptionFields,
        TitleFields,
        priceFields,
        downloadUrls } = req.body;


    const NewProduct = new databaseSchema({
        Categories: selectedOption,
        SubCategories: subselectedOption,
        Description: descriptionFields,
        Title: TitleFields,
        Price: priceFields,
        Images: downloadUrls
    })

    NewProduct.save({})
        .then(() => {
            console.log("it was successfully saved")
            res.send("you are welcome")
        })
        .catch((err) => console.log("there was an error while trying to upload the code"))



    res.send('your are welcome')
})



app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`)
})