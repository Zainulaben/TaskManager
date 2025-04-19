const multer = require("multer");

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (res, file, cb) => {
    cb(null, `${Data.now()}-${file.originalname}`);
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["images/jpeg", "images/png", "images/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpeg .png .jpg formate are allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });
module.exports = upload;
