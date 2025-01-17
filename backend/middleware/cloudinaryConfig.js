const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Cloudinary storage configuration
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "user_images", // Cloudinary folder name
      format: async (req, file) => {
        const ext = file.originalname.split(".").pop().toLowerCase();
        if (['jpg', 'jpeg', 'png'].includes(ext)) {
          return ext; // Return the file extension as format (jpg, jpeg, or png)
        }
        return 'jpg'; // Default to 'jpg' if it's not jpg, jpeg, or png
      },
      public_id: (req, file) => `${Date.now()}-${file.originalname.split(".")[0]}`,
    },
  });
  

const upload = multer({ storage });

module.exports = { upload };
