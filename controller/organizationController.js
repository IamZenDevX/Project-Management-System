const ErrorHandler = require("../utils/default/errorHandler");
const organization = require("../models/organizationModel");

exports.addorganization = async (req, res, next) => {
  const { member, name } = req.body;
  let createdorganization;
  createdorganization = await organization.create({
    member,
    name,
  });
  res.json(createdorganization);
};

exports.deleteorganization = async (req, res, next) => {
  const { id } = req.params;
  const deletedorganization = await organization.findByIdAndDelete(id);
  res.json("Data Deleted Successfully!");
};

exports.getorganization = async (req, res, next) => {
  const { id } = req.params;
  let var_organization_List;
  var_organization_List = await organization.findById(id, "name member ");
  res.json(var_organization_List);
};

exports.updateorganization = async (req, res, next) => {
  const { id } = req.params;
  let updatedorganization;
  updatedorganization = await organization.findByIdAndUpdate(
    id,
    {
      member: member,
      name: name,
    },
    { new: true }
  );
  res.json(updatedorganization);
};
