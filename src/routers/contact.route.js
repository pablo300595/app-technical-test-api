const express = require('express')
const { createContact, getContacts, getContactById } = require('../controller/contact.controller')
const router = new express.Router()

router.post('/contacts', createContact)
router.get('/contacts', getContacts)
router.get('/contacts/:id', getContactById)

module.exports = router