import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaLinkedinIn, FaShoppingCart } from 'react-icons/fa'; // Importing React Icons
import useProduct from '../zustand/useProduct';

export default function ProductCard({ data }) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { cartProduct, setCartProduct } = useProduct();
    const [productAddedPopup, setProductAddedPopup] = useState(false);

    const handleBuyNowClick = () => {
        setIsPopupVisible(true);
    };

    const handleAddToCart = () => {
        const productExists = cartProduct.some(item => item._id === data._id);

        if (!productExists) {
            const cart = [...cartProduct, { ...data, quantity: 1 }];
            setCartProduct(cart);
            localStorage.setItem('cart', JSON.stringify(cart));
            setProductAddedPopup(true);
        }
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    // Automatically close the "product added" popup after 2 seconds
    useEffect(() => {
        let timeout;
        if (productAddedPopup) {
            timeout = setTimeout(() => {
                setProductAddedPopup(false);
            }, 2000); // Close after 2 seconds
        }

        return () => clearTimeout(timeout); // Cleanup timeout on component unmount
    }, [productAddedPopup]);

    return (
        <div className="rounded-2xl bg-gray-200 pc:w-[355px] md:w-[300px] hover:shadow-xl transition-shadow duration-300 p-3 pb-0 ease-in-out">
            {productAddedPopup && (
                <div className='fixed top-10 right-5 bg-green-500 text-white p-3 rounded-lg shadow-lg'>
                    {data.name} added to cart
                </div>
            )}

            {/* Product Image */}
            <img className="w-full rounded-xl h-96 object-cover" src={data.images[0]} alt="Product" />

            {/* Product Details */}
            <div className="px-3 py-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="font-semibold text-gray-800 text-lg truncate">{data.name}</h2>
                    <span className="text-lg font-bold text-gray-800">{data.price} birr</span>
                </div>

                <div className="flex justify-between items-center">
                    <div
                        className="self-end px-4 py-2 rounded-lg bg-gray-400 text-white font-semibold text-sm text-center cursor-pointer transition duration-200 hover:bg-gray-500"
                        onClick={handleBuyNowClick}
                    >
                        Buy Now
                    </div>
                    <div onClick={handleAddToCart} className='top-2 right-3 items-center text-[12px] px-2 py-1 rounded-lg hover:opacity-50 hover:cursor-pointer bg-gray-300 flex gap-2'>
                        <div className=' bg-gray-200 text-black px-2 py-1 rounded-lg'>
                            Add to cart
                        </div>
                        <FaShoppingCart className='text-gray-700 group text-lg hover:text-gray-600' />
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
