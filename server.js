const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require("mongoose");
const axios = require("axios")
require("./config/db")
const databaseSchema = require("./Model/Project")
const cors = require('cors');


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
app.get('/', (req, res) => {
res.send("you are welcome")
})

app.post("/upload_Categories", (req, res) => {
    const { selectedOption,
        subselectedOption,
        descriptionFields,
        TitleFields,
        priceFields,
        downloadUrls, } = req.body;


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