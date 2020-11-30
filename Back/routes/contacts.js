//imports
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const controllers = require("../controllers/contact.controllers");
//Routing Methods
//Post contact

//@Method POST
//@Desc post a contact
//@Path :http://localhost:9000/api/contact
//@Params Body
router.post("/", controllers.postContact);
//Get all contacts

//@Method GET
//@Desc get all contact
//@Path :http://localhost:9000/api/contact
router.get("/", controllers.getAllContacts);
//Get contact by id

//@Method GET
//@Desc get a contact by id
//@Path :http://localhost:9000/api/contact/:id
//@params id
router.get("/:id", controllers.getContactById);
//Delete a contact by id

//@Method DELETE
//@Desc delete a contact by id
//@Path :http://localhost:9000/api/contact/:id
//@params id
router.delete("/:id", controllers.deleteContact);
//Update a contact by id

//@Method PUT
//@Desc update a contact by id
//@Path :http://localhost:9000/api/contact/:id
//@params id and body
router.put("/:id", controllers.updateContact);
//export
module.exports = router;
