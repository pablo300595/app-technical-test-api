const { findByIdAndDelete } = require('../models/contact.model')
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

const updateContactById = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['first_name', 'last_name', 'gender', 'favorite', 'contact']
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))
    
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'})
    }
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            favorite: req.body.favorite,
            contact: req.body.contact
        }, {new: true})
        res.send(updatedContact)
    } catch (e) {
        res.status(400).send(e)
    }
}

const deleteContactById = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id)
        res.send({message: 'Deleted with success'})
    } catch (e) {
        res.status(500).send()
    }
}

module.exports = {
    createContact,
    getContacts,
    getContactById,
    updateContactById,
    deleteContactById
}