import express from 'express';
import {uploadourse,allCourses,updateCourse,deleteCourse} from '../controllers/course.controller.js'

const router = express.Router();

// for course 
router.post("/upload-course", uploadourse);
router.get("/all-course",allCourses)
router.patch("/update-course/:id",updateCourse)
router.delete("/delete-course/:id",deleteCourse)
/*


  // Update a book data: PATCH method
  app.patch("/update-book/:id", async (req, res) => {
    const id = req.params.id;
    const updateBookData = req.body;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
      $set: { ...updateBookData }
    };
    const option = { upsert: true };
    const result = await bookscollection.updateOne(filter, updateDoc, option);
    res.send(result);
  });

  // Delete a book by id: DELETE method
  app.delete("/book-delete/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await bookscollection.deleteOne(filter);
    res.send(result);
  });

  // find by category
  app.get("/get-books", async (req, res) => {
    let query ={};
    if(req.query?.category){
      query = { category: req.query.category }
    }
    const result = await bookscollection.find(query).toArray();
    res.send(result);
  });

  // to get single book
  app.get("/single-book/:id", async (req, res) => {
    const id = req.params.id;
    
    try {
      const filter = { _id: new ObjectId(id) };
      const result = await bookscollection.findOne(filter);
      
      if (!result) {
        res.status(404).send({ message: "Book not found" });
      } else {
        res.send(result);
      }
    } catch (error) {
      res.status(500).send({ message: "Error fetching the book", error });
    }
  });
  */
  export default router