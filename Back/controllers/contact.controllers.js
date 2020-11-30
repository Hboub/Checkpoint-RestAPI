//imports
const Contact = require("../models/Contact");
//controller functions
//Post controller
exports.postContact= async (req, res) => {
    try {
      const newContact = new Contact(req.body);
      if (!newContact.email) {
        res.status(400).send({ message: "Email is required!!" });
        return;
      }
      const user= await Contact.findOne({email:req.body.email});
      if (user) {
        res.status(400).send({ message: "Email must be unique !!" });
        return;
      }
      const result = await newContact.save();
      res
        .status(200)
        .send({ response: result, message: "Contact added successfully !" });
    } catch (e) {
      res.status(500).send({ message: "Can not save it" });
    }
  }
;
//Get all contact controller
exports.getAllContacts=async (req, res) => {
    try {
      const result = await Contact.find();
      res
        .status(200)
        .send({ response: result, message: "Getting contacts successfully" });
    } catch (e) {
      res.status(400).send({ message: "Can not get contacts!!" });
    }
  };
  //Get a contact by id controller
  exports.getContactById=async (req, res) => {
    try {
      const result = await Contact.findOne({ _id: req.params.id });
      res.status(200).send({
        response: result,
        message: "Got the desired contact successfully",
      });
    } catch (e) {
      res.status(500).send({ message: "there is no contact with this id" });
    }
  }
  //Delete a contact by id controller
  exports.deleteContact=async (req, res) => {
    try {
      const result = await Contact.deleteOne({ _id: req.params.id });
      result.n
        ? res.status(200).send({ message: "Contact deleted successfully!" })
        : res
            .status(500)
            .send({ message: "There is no Contact with this id !!" });
    } catch (e) {
      res.status(500).send({ message: "there is no id!!" });
    }
  }
  //Update a contact by id controller
  exports.updateContact=async (req, res) => {
    try {
      const result = await Contact.updateOne({ _id: req.params.id },{$set:{...req.body}});
      result.nModified? res.status(200).send({
        message: "Updated the desired contact successfully !",
      }):res.send({message:"The contact already updated !"});
    } catch (e) {
      res.status(500).send({ message: "there is no contact with this id !" });
    }
  }