import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },
        category: {
            type: String,
            required: true,
            trim: true,
            maxlength: 80,
        },
        tools: {
            type: [ String ],
            required: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 1000,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model( "Project", projectSchema );