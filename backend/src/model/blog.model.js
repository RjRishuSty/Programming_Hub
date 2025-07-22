import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    adminId:{type:mongoose.Schema.Types.ObjectId,ref:'auth',required:true},
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    thumbnail: { type: String, default: "" },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("BlogCollection", blogSchema);

export default blogModel;
