import { Schema, model } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { MongoAtlas } from '../products/DAOs/mongo';

interface TaskType {
  _id: string;
  name: string;
  description: string;
  codeproduct: number;
  url: string;
  price: number;
  stock: number;
}

const TaskSchema = new Schema<TaskType>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    codeproduct: {
      type: Number,
      required: true,
      unique: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const AtlasMongoose = MongoAtlas.getConnection();
export const TaskModel = AtlasMongoose.model<TaskType>('products', TaskSchema);
export const TaskTC = composeWithMongoose(TaskModel);