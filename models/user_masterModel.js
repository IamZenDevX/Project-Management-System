const mongoose = require("mongoose");

const user_masterSchema = new mongoose.Schema(
{
firstname: {
type: String, 
},
lastname: {
type: String, 
},
email: {
type: String, 
},
passsword: {
type: String, 
},
role: {
type: String, 
enum: ["admin","developer"],
},
},
);





module.exports = mongoose.model("user_master", user_masterSchema);
