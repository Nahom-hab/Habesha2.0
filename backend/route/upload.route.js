import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../middelwere/cloudinary.config.js';

const router = express.Router();

// Configure Multer storage for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'your_folder_name', // Optional: Specify a folder name in Cloudinary
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif'], // Specify allowed formats
    },
});

const upload = multer({ storage });

// Route to upload multiple images
router.post('/upload', upload.array('images', 10), (req, res) => {
    try {
        const imageUrls = req.files.map(file => file.path); // Get the image URLs
        res.status(200).json({
            message: "Images uploaded successfully",
            urls: imageUrls,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
