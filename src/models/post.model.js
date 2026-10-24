import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

export const Post = mongoose.model("Post", postSchema);
