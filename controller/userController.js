const ErrorHandler = require("../utils/default/errorHandler");
const user_master = require("../models/user_masterModel");

exports.deleteuser = async (req, res, next) => {
  const { id } = req.params;
  const deleteduser_master = await user_master.findByIdAndDelete(id);
  res.json("Data Deleted Successfully!");
};

exports.getalluser = async (req, res, next) => {
  let var_user_master_List;
  var_user_master_List = await user_master.find(
    {},
    "role firstname lastname email passsword "
  );
  res.json(var_user_master_List);
};

exports.login = async (req, res, next) => {
  const { email } = req.body;
  let var_user_master_List;
  var_user_master_List = await user_master.findOne(
    {
      email,
    },
    "email "
  );
  if (var_user_master_List) {
    const error = new ErrorHandler("User with this email not register !", 400);
    return next(error);
  } else {
    res.json("Login Successfully !");
  }
};

exports.register = async (req, res, next) => {
  const { email, firstname, lastname, passsword, role } = req.body;
  let var_user_master_List;
  var_user_master_List = await user_master.findOne(
    {
      email,
    },
    "email "
  );
  if (var_user_master_List) {
    res.json("User Already Exits !");
  } else {
    let createduser_master;
    createduser_master = await user_master.create({
      lastname,
      role,
      passsword,
      email,
      firstname,
    });
    res.json(createduser_master);
  }
};
