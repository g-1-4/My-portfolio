const express = require("express");
const rateLimit = require("express-rate-limit");
const pageController = require("../controllers/pagesController");

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many contact form submissions, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: "Too many contact form submissions, please try again later.",
    });
  },
});

// Contact form route
router.post("/submit-contact", contactLimiter, pageController.submitContact);

// Health check route
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
