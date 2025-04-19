const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  text: { type: String, require: true },
  completed: { type: Boolean, default: false },
});

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  dueData: { type: Date, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  attachments: { type: String },
  todoChecklist: { todoSchema },
  progress: { type: Number, default: 0 },
});

module.exports = mongoose.model("Task", taskSchema);
