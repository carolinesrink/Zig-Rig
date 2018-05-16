const mongoose = required("mongoose");

const Schema = mongoose.Schema;

const LoadTemplateSchema = new Schema({

    name: {type: String, required: true},
    voltage: {type: Number, required: true},
    current: {type: Number, required: true}
      
});

const LoadTemplate = mongoose.model("User", LoadTemplateSchema);
  
module.exports = LoadTemplate;