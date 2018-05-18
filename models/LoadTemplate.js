const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LoadTemplateSchema = new Schema({

    name: {type: String, required: true},
    voltage: {type: Number, required: true},
    current: {type: Number, required: true},

    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      } 
      
});

const LoadTemplate = mongoose.model("User", LoadTemplateSchema);
  
module.exports = LoadTemplate;