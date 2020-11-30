//imports
const mongoose = require("mongoose");
//definition du schema contact
const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required:true,
  },
  phone: String
  
});
//exportation du model
module.exports = mongoose.model("contact", contactSchema);