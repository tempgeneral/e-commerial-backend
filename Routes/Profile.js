const express = require("express")
const router = express.Router()
const ProfileSchema = require('../Model/Profile')

router.get('/profileSignUp', (req, res) => {
    ProfileSchema.find().then((user) => {
        res.json(user)
    }).catch((err) => {
        console.log(err)
    })
})
router.post('/profileSignUp', (req, res) => {
    const { firstName,
        lastName,
        phoneNumber,
        email } = req.body

    const NewProfile = new ProfileSchema({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    })

    NewProfile.save({})
        .then(() => {
            console.log("it was successfully saved")
            res.send("you are welcome")
        })
        .catch((err) => console.log("there was an error while trying to upload the code"))



})




module.exports =  router