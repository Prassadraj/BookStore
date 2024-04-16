import express from "express";
import { Bookmodel } from "../models/bookmodel.js";

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear ||!req.body.description) {
      return res.send({ message: "send all required field" }).status(500);
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      description: req.body.description,
    };
    const Book = await Bookmodel.create(newBook);
    return res.send(Book).status(204);
  } catch (err) {
    console.log(err);
    res.send({ message: err.message }).status(500);
  }
});
//GET all Books
router.get("/", async (req, res) => {
  try {
    const getBooks = await Bookmodel.find({});
    return res.status(200).json({
      count: getBooks.length,
      data: getBooks,
    });
  } catch (err) {
    res.send({ message: err.message }).status(500);
  }
});
//Get the Books by Id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getBooksById = await Bookmodel.findById(id);
    return res.status(200).json(getBooksById);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
//Update or Edit the Books By put

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear ||
      !req.body.description
    ) {
      return res.send({ message: "send all required field" }).status(500);
    }
    const { id } = req.params;
    const EditBook = await Bookmodel.findByIdAndUpdate(id, req.body);
    if (!EditBook) {
      return res.send({ message: "Book not found" }).status(500);
    }
    return res.send("Successfully Book Updated").status(200);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
//Delete the Books
router.delete("/:id", async (req, res) => {
  try {
    // if(!req.body.title||
    //     !req.body.author||
    //     !req.body.publishYear ){
    //         return res.send({message:"send all required field"}).status(500)
    // }
    const { id } = req.params;
    const deleteBook = await Bookmodel.findByIdAndDelete(id);
    if (!deleteBook) {
      res.send("Book not Found").status(500);
    }
    return res.send("Book Deleted Successfully..").status(200);
  } catch (err) {
    console.log(err);
    res.send({ message: err.message }).status(500);
  }
});
export default router;
