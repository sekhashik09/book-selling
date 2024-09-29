import { Course } from '../models/course.model.js';
import mongoose from 'mongoose';



export const uploadourse = async (req, res) => {
  try {
    // Get book data from request body
    const courseData = req.body;

    // Create a new book instance
    const newCourse = new Course(courseData);

    // Save the book to the database
    const result = await newCourse.save();

    // Send success response
    res.status(201).json({ success: true, message: 'Course uploaded successfully', data: result });
  } catch (error) {
    console.error("Error in uploading course:", error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
};

export const allCourses = async (req, res) => {
    try {
      // Fetch all books from the Course collection
      const courses = await Course.find();  // Mongoose query to get all books
      res.status(200).json({ success: true, data: courses });
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };

export const updateCourse= async (req, res) => {
    const { id } = req.params;  // Get the book ID from the URL parameters
    const updatedCourseData = req.body;  // Get the updated book data from the request body
  
    try {
      // Find the book by ID and update it with new data
      const updatedCourse = await Course.findByIdAndUpdate(id, updatedCourseData, { 
        new: true,  // Return the updated book after the modification
        runValidators: true  // Ensure validation rules are respected
      });
  
      if (!updatedCourse) {
        return res.status(404).json({ success: false, message: 'course not found' });
      }
  
      res.status(200).json({ success: true, message: 'course updated successfully', data: updatedCourse });
    } catch (error) {
      console.error("Error updating book:", error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };
  
 export const deleteCourse = async (req, res) => {
    const { id } = req.params;  // Get the course ID from the URL
  
    try {
      // Check if the provided ID is valid
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: 'Invalid course ID' });
      }
  
      // Find the document by ID and delete it
      const deletedCourse = await Course.findByIdAndDelete(id);
  
      if (!deletedCourse) {
        return res.status(404).json({ success: false, message: 'Course not found' });
      }
  
      res.status(200).json({ success: true, message: 'Course deleted successfully' });
    } catch (error) {
      console.error("Error deleting course:", error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };
  
  
//   export const deleteCourse = async (req, res) => {
//   try {
//     let reqData = {
//         delete_status: true
//     };


//     if (userSingleData) {

//         console.log(__dirname, '__dirname')

//         let filePath = __dirname + '/../public/user/' + userSingleData.profile_pic;
//         console.log(filePath, 'filePath', fs.existsSync(filePath))

//         if (fs.existsSync(filePath)) {
//             await fs.unlinkSync(filePath);
//         }

//         // let updateData = await userModel.findByIdAndUpdate(req.params.id, reqData);
//         let updateData = await userModel.findByIdAndDelete(req.params.id);

//         res.send({
//             "message": "Data deleted successfully",
//             "data": {}
//         })
//     } else {
//         res.send({
//             "message": "Data not found",
//             "data": {}
//         })
//     }
// } catch (err) {
//     res.send({
//         "message": "Error",
//         data: err
//     })