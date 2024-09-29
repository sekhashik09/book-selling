import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    coursename: {
        type: String,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    courseUrl: {
        type: String,
        required: true
    },
    courseImageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
});  // Correct 'timestamp' to 'timestamps'

export const Course = mongoose.model('Course', courseSchema);
