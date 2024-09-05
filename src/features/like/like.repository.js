// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
import { likeSchema } from "./like.schema.js";
import { userSchema } from "../user/user.schema.js";
import { jobSchema } from "../jobs/schema/newJob.schema.js";

const userModel = mongoose.model("User", userSchema);
const newJobModel = mongoose.model("Job", jobSchema);
const likeModel = mongoose.model("Like", likeSchema);

export const likeRepo = async (user_id, job_id, model) => {
  // Write your code here
  if(model === 'Job'){
    const job = await newJobModel.findById(job_id);
    if(!job){
      throw new Error("Job not found");
    }
  }
  if(model === 'User'){
    const user = await userModel.findById(job_id);
    if(!user)
      throw new Error("User not found");
  }
  
  const existingLike = await likeModel.findOne({
    user: user_id,
    likeable: job_id
  });

  if (existingLike) {
    throw new Error("Like already exists");
  }

  const like = new likeModel({user: user_id, likeable: job_id, on_model: model});

  try{
    await like.save();
    return like;
  }catch(error){
    return error;
  }
};

export const getLikesRepo = async (id, on_model) => {
  try {
    let populateModel;
    if (on_model === 'Job') {
      populateModel = newJobModel;
    } else if (on_model === 'User') {
      populateModel = userModel;
    }

    const resp = await likeModel.find({ likeable: id, on_model })
      .populate({
        path: 'likeable',
        model: populateModel
      })
      .populate({
        path: 'user',
        model: userModel
      });

    return resp;
  } catch (error) {
    return error;
  }
};