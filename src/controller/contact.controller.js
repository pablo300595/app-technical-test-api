const Contact = require('../models/contact.model')

const createContact = async (req, res) => {
    const contact = new Contact(req.body)
    try {
        await contact.save()
        res.status(201).send({ contact })
    } catch (e) {
        res.status(400).send(e)
    }
}

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({})
        if(!contacts) throw new Error()
        res.send(contacts)
    } catch (e) {
        res.status(404).send()
    }
}

const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id)
        if(!contact) throw new Error()
        res.send(contact)
    } catch (e) {
        res.status(404).send()
    }
}

module.exports = {
    createContact,
    getContacts,
    getContactById
}