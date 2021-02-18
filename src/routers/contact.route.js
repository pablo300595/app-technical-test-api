const express = require('express')
const Contact = require('./../models/contact.model')
const router = new express.Router()

router.post('/contacts', async (req, res) => {
    const contact = new Contact(req.body)
    try {
        await contact.save()
        res.status(201).send({ contact })
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router