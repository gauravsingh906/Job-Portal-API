// Please don't change the pre-written code
// Import the necessary modules here

import mongoose from'mongoose';
import { jobSchema } from './schema/newJob.schema.js';
import { applyJobSchema } from './schema/applyJob.schema.js';

const newJobModel = mongoose.model('Job', jobSchema);
const applyJobModel = mongoose.model('Job_Applicant', applyJobSchema);

export const createNewJob = async (job) => {
  // Write your code here
  const newJob = new newJobModel(job);
  try {
    const resp = await newJob.save();
    return resp;
  } catch (error) {
    return error;
  }
};

export const applyJobRepo = async (jobId, userId) => {
  // Write your code here
  try {
    const job = await newJobModel.findById(jobId);
    if(job.applicants.includes(userId)){
      return null;
    }
    const applyJob = new applyJobModel({ jobId, userId });
    await applyJob.save();
    job.applicants.push(userId);
    await job.save();
    return findJobRepo(jobId);
  } catch (error) {
    return error;
  }
};
export const findJobRepo = async (_id) => {
  // Write your code here
  try{
    const job = await newJobModel.findById(_id);
    return job;
  }catch(error){
    return error;
  }
};
