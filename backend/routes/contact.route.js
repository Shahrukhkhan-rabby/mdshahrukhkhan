import express from "express";
import Contact from "../models/Contact.model.js"; // Mongoose model for contact form data

const router = express.Router();

// POST: Save contact form data
router.post("/", async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create a new Contact document
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save(); // Save to the database
    res
      .status(201)
      .json({ message: "Your message has been sent successfully!" });
  } catch (err) {
    next(err);
  }
});

export default router;
