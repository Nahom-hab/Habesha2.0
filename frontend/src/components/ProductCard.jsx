import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaLinkedinIn, FaShoppingCart, FaTelegramPlane } from 'react-icons/fa'; // Importing React Icons
import useProduct from '../zustand/useProduct';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ data }) {
    const navigate = useNavigate()
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { cartProduct, setCartProduct } = useProduct();
    const [productAddedPopup, setProductAddedPopup] = useState(false);

    const handleBuyNowClick = () => {
        setIsPopupVisible(true);
    };

    const IsInCart = () => {
        return cartProduct.some(item => item._id === data._id);

    }

    const handleAddToCart = () => {
        const productExists = IsInCart();

        if (!productExists) {
            const cart = [...cartProduct, { ...data, quantity: 1 }];
            setCartProduct(cart);
            localStorage.setItem('cart', JSON.stringify(cart));
            setProductAddedPopup(true);
        }
    };

    const handleRemoveFromCart = () => {
        const productExists = IsInCart();

        if (productExists) {
            const cart = cartProduct.filter(item => item._id !== data._id);
            setCartProduct(cart);
            localStorage.setItem('cart', JSON.stringify(cart));
            setProductAddedPopup(true);
        }
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    const handleView = () => {
        navigate(`/view/${data._id}`, { state: data })
    }

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
        <div className="rounded-2xl bg-gray-200 w-full hover:shadow-xl transition-shadow duration-300 p-3 pb-0 ease-in-out">
            {productAddedPopup && (
                <div className={`fixed top-20 z-50 right-2 ${IsInCart() ? 'bg-green-500' : 'bg-red-500'}  text-white p-3 rounded-lg shadow-lg`}>
                    {data.name} {IsInCart() ? 'added to' : 'Removed from'}  cart
                </div>
            )}

            {/* Product Image */}
            <img onClick={() => handleView()} className="w-full rounded-xl h-96 object-cover" src={data.images[0]} alt="Product" />

            {/* Product Details */}
            <div className="px-3 py-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="font-semibold text-gray-800 text-lg truncate">{data.name}</h2>
                    <span className="text-lg font-bold text-gray-800">{data.price} birr</span>
                </div>

                <div className="flex justify-between items-center">
                    <div
                        className="self-end px-4 py-2 rounded-lg bg-[#A78C6E] text-white font-semibold text-sm text-center cursor-pointer transition duration-200 hover:bg-gray-500"
                        onClick={handleBuyNowClick}
                    >
                        Buy Now
                    </div>
                    <div onClick={() => {
                        IsInCart() ? handleRemoveFromCart() : handleAddToCart()
                    }} className='top-2 right-3 items-center text-[12px] px-2 py-1 rounded-lg hover:opacity-80 hover:cursor-pointer bg-gray-300 flex gap-2'>
                        <div className=' bg-gray-200 text-black px-2 py-1 rounded-lg'>
                            {IsInCart() ? 'Remove From Cart' : 'Add To Cart'}
                        </div>
                        <FaShoppingCart className='text-gray-600 group text-lg hover:text-gray-700' />
                    </div>
                </div>
            </div>

            {/* Popup */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-primary rounded-lg p-6 shadow-lg w-80">
                        <h3 className="font-semibold text-lg mb-4">Buy Now with us </h3>
                        <ul className="space-y-2 mb-4">
                            <li className="flex text-xl bg-slate-200 rounded-xl px-2 py-1 w-fit items-center">
                                <FaTelegramPlane className="text-blue-800 mr-2" />
                                <a href="https://t.me/nahom_hab" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Telegram
                                </a>
                            </li>
                            <li className="flex text-xl bg-slate-200 rounded-xl px-2 py-1 w-fit items-center">
                                <FaFacebookF className="text-blue-600 mr-2" />
                                <a href="https://www.facebook.com/nahom.hab" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Facebook
                                </a>
                            </li>
                            <li className="flex text-xl bg-slate-200 rounded-xl px-2 py-1 w-fit items-center">
                                <FaInstagram className="text-red-600 mr-2" />
                                <a href="https://www.instagram.com/nahom.hab" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Instagram
                                </a>
                            </li>
                            {/* <li className="flex text-xl bg-slate-200 rounded-xl px-2 py-1 w-fit items-center">
                                <FaTwitter className="text-blue-400 mr-2" />
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Twitter
                                </a>
                            </li>
                            <li className="flex text-xl bg-slate-200 rounded-xl px-2 py-1 w-fit items-center">
                                <FaPinterestP className="text-red-600 mr-2" />
                                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Pinterest
                                </a>
                            </li> */}

                        </ul>

                        {/* Contact Information */}
                        <div className="mt-4">
                            <h4 className="font-semibold text-md mb-2">Contact Us</h4>
                            <p className="text-sm text-gray-600">Phone: <a href="tel:+251907702898" className="text-blue-600 hover:underline">+251 907 702 898</a></p>
                            <p className="text-sm text-gray-600">Email: <a href="mailto:nahomhabtamu147@gmail.com" className="text-blue-600 hover:underline">nahomhabtamu147@gmail.com</a></p>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <button onClick={() => {
                                handleAddToCart()
                                navigate('/cart')
                            }} className="mt-4 bg-gray-400 text-white rounded-lg px-4 py-2">
                                Buy Here Now
                            </button>

                            <button onClick={closePopup} className="mt-4 bg-gray-400 text-white rounded-lg px-4 py-2">
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
