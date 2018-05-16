const mongoose = required("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({

    generator: {
      output: {type: String, required: true},
      capacity: {type: Number, required: true}
    },

    loads: [
      {
        name: {type: String, required: true},
        current: {type: Number, required: true},
        voltage: {type: Number, required: true},
        connections: [{type: String, required: true}]
      }
    ]

});

const Project = mongoose.model("User", ProjectSchema);
  
module.exports = Project;