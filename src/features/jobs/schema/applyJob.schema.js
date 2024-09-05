// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from'mongoose';

export const applyJobSchema = new mongoose.Schema({
  // Write your code here
  jobId :{
    required:true,
    type: mongoose.Schema.Types.ObjectId,
    ref : 'Job'
  },
  userId :{
    required:true,
    type: mongoose.Schema.Types.ObjectId,
    ref : 'User'
  }
});
