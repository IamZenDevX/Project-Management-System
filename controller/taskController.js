const ErrorHandler = require("../utils/default/errorHandler");
const task = require("../models/taskModel");

exports.createtask = async (req, res, next) => {
  const { assignto, enddate, name, startdate, status } = req.body;
  let createdtask;
  createdtask = await task.create({
    assignto,
    name,
    status,
    startdate,
    enddate,
  });
  res.json(createdtask);
};

exports.gettask = async (req, res, next) => {
  const { id } = req.params;
  let var_task_List;
  var_task_List = await task.findById(
    id,
    "name assignto startdate status enddate "
  );
  res.json(var_task_List);
};

exports.updatetaskstatus = async (req, res, next) => {
  const { id } = req.params;
  let var_task_List;
  var_task_List = await task.findOne(
    {
      name,
    },
    "name "
  );
  if (var_task_List) {
    res.json("task not found");
  } else {
    let updatedtask;
    updatedtask = await task.findByIdAndUpdate(
      id,
      {
        status: status,
        assignto: assignto,
        name: name,
      },
      { new: true }
    );
    res.json(updatedtask);
  }
};
