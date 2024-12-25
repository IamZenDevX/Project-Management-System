const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
{
name: {
type: String, 
},
startdate: {
type: Date, 
},
enddate: {
type: Date, 
},
assignto: {
type: mongoose.Schema.Types.ObjectId, 
ref: "user_master",
},
status: {
type: String, 
enum: ["To Do","In Progress","Open","Done","Closed"],
},
},
);





module.exports = mongoose.model("task", taskSchema);
