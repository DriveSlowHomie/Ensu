let mongoose = require('mongoose');


//Defining user schema
let BugSchema:any = new mongoose.Schema (
  {
    bugName: String,
    description: String,
    discoveredBy: String,
    assignedTo: Number,
    date_created: Date,
    resolved: {
      type: Date,
      default: null
  }
})


let Bug = mongoose.model("Bug", BugSchema);
export = Bug;
