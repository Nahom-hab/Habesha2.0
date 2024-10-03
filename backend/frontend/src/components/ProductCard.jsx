import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaLinkedinIn } from 'react-icons/fa'; // Importing React Icons
import photo4 from '../assets/couple2.jpeg';

export default function ProductCard({ data }) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleBuyNowClick = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="rounded-2xl bg-gray-200 pc:w-[355px] md:w-[300px] hover:shadow-xl transition-shadow duration-300 p-3 pb-0 ease-in-out">
            {/* Product Image */}
            <img className="w-full rounded-xl h-96 object-cover" src={data} alt="Product" />

            {/* Product Details */}
            <div className="px-3 py-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="font-semibold text-gray-800 text-lg truncate">Premium Jacket</h2>
                    <span className="text-lg font-bold text-gray-800">$199.99</span>
                </div>

                <div className="flex justify-between items-center">
                    <div
                        className="self-end px-4 py-2 rounded-lg bg-gray-400 text-white font-semibold text-sm text-center cursor-pointer transition duration-200 hover:bg-gray-500"
                        onClick={handleBuyNowClick}
                    >
                        Buy Now
                    </div>
                    <div className="text-sm text-gray-500">
                        <span className="font-semibold">4.5</span> ★
                    </div>
                </div>
            </div>

            {/* Popup */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-80">
                        <h3 className="font-semibold text-lg mb-4">Buy Now with us</h3>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center">
                                <FaFacebookF className="text-blue-600 mr-2" />
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Facebook
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaInstagram className="text-blue-600 mr-2" />
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Instagram
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaTwitter className="text-blue-600 mr-2" />
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Twitter
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaPinterestP className="text-blue-600 mr-2" />
                                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Pinterest
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaLinkedinIn className="text-blue-600 mr-2" />
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>

                        {/* Contact Information */}
                        <div className="mt-4">
                            <h4 className="font-semibold text-md mb-2">Contact Us</h4>
                            <p className="text-sm text-gray-600">Phone: <a href="tel:+251XXXXXXXXX" className="text-blue-600 hover:underline">+251 9XX XXX XXX</a></p>
                            <p className="text-sm text-gray-600">Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a></p>
                        </div>

                        <button onClick={closePopup} className="mt-4 bg-gray-400 text-white rounded-lg px-4 py-2">
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}
