import React, { useState } from 'react';
import axios from 'axios';

const AddProductPage = () => {
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        productType: '',
        images: []
    });

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploading, setUploading] = useState(false);

    const productTypes = ["family", "couple", "wedding", "male", "female", "children"];

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    // Handle file input for images
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length <= 5) { // Update to allow up to 5 images
            setSelectedFiles(files);
        } else {
            alert('You can only upload up to 5 images.');
        }
    };

    // Function to upload images and get URLs
    const uploadImages = async () => {
        if (selectedFiles.length === 0) return [];
        const formData = new FormData();
        selectedFiles.forEach(file => {
            // Optional: Check if file is an image
            if (!file.type.startsWith('image/')) {
                alert(`${file.name} is not a valid image file.`);
                return;
            }
            formData.append('images', file);
        });
        console.log(selectedFiles);

        try {
            setUploading(true);
            const { data } = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUploading(false);
            return data.urls; // Assume data contains the array of image URLs
        } catch (error) {
            console.error('Error uploading images:', error);
            setUploading(false);
            alert('Failed to upload images. Please try again.');
            return [];
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // First, upload the images
        const uploadedImages = await uploadImages();

        // If image upload fails or no images, show an alert
        if (uploadedImages.length === 0 && selectedFiles.length > 0) {
            alert('Failed to upload images. Please try again.');
            return;
        }

        // Merge uploaded image URLs with form data
        const productPayload = {
            ...productData,
            images: uploadedImages,
            price: parseFloat(productData.price) // Ensure price is a number
        };

        try {
            await axios.post('/api/product', productPayload);
            alert('Product added successfully!');
            // Clear form after submission

            setSelectedFiles([]);
        } catch (error) {
            console.error('Error submitting product:', error);
            alert('Failed to add product');
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Add a New Product</h1>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                {/* Product Name */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter product name"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Description</label>
                    <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter product description"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter product price"
                        required
                        min="0"
                    />
                </div>

                {/* Product Type */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Product Type</label>
                    <select
                        name="productType"
                        value={productData.productType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option value="">Select product type</option>
                        {productTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                {/* Image Upload */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Product Images (Max 3)</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        multiple
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        accept="image/*"
                        required
                    />
                </div>

                {/* Display selected image filenames */}
                {selectedFiles.length > 0 && (
                    <div className="mb-6">
                        <p className="font-semibold text-gray-700">Selected Images:</p>
                        <ul>
                            {selectedFiles.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    disabled={uploading}
                >
                    {uploading ? 'Uploading...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
};

export default AddProductPage;
