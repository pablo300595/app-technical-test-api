const express = require('express')
const { createContact, getContacts, getContactById, updateContactById, deleteContactById } = require('../controller/contact.controller')
const router = new express.Router()

router.post('/contacts', createContact)
router.get('/contacts', getContacts)
router.get('/contacts/:id', getContactById)
router.put('/contacts/:id', updateContactById)
router.delete('/contacts/:id', deleteContactById)

module.exports = router