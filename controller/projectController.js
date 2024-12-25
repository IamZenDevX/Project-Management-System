const ErrorHandler = require("../utils/default/errorHandler");
const project = require("../models/projectModel");

exports.addmembertoproject = async (req, res, next) => {
  const { projectid } = req.params;
  //		manual code
  try {
    const { projectId } = req.params;
    const { email, role } = req.body;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    project.members.push({ user: user._id, role });
    await project.save();
    res.json({ message: "Member added to project" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.createproject = async (req, res, next) => {
  const { admin, name, organization, task } = req.body;
  let createdproject;
  createdproject = await project.create({
    organization,
    task,
    admin,
    name,
  });
  res.json(createdproject);
};

exports.deleteproject = async (req, res, next) => {
  const { id } = req.params;
  const deletedproject = await project.findByIdAndDelete(id);
  res.json("Data Deleted Successfully!");
};

exports.getallprojects = async (req, res, next) => {
  let var_project_List;
  var_project_List = await project.find({}, "name task organization admin ");
  res.json(var_project_List);
};

exports.getprojectbyid = async (req, res, next) => {
  const { id } = req.params;
  let var_project_List_by_ID;
  var_project_List_by_ID = await project.findById(
    id,
    "admin task name organization "
  );
  res.json(var_project_List_by_ID);    
};

exports.getprojectbyorganizationid = async (req, res, next) => {
  const { id } = req.params;
  let var_project_List_by_organization;
  var_project_List_by_organization = await project.findOne(
    {
      organization: id,
    },
    "admin name task organization "
  );
  res.json(var_project_List_by_organization);
};
