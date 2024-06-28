import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const categoryModel = mongoose.model('Category', categorySchema);

export default categoryModel;