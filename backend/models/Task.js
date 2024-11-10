import mongoose from 'mongoose';

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'], 
    default: 'medium', 
  },
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
