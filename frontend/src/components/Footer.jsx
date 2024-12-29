import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary text-black py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

                    {/* Company Info */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold">Habesha</h3>
                        <p className="text-black mt-2">© 2024 All Rights Reserved.</p>
                    </div>

                    {/* News Later Section */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold">Stay Updated!</h4>
                        <p className="mt-2 text-sm">Join our community for the latest news, offers, and updates.</p>
                        <button className="mt-2 bg-[#A78C6E] px-4 py-2 rounded-md text-white">Learn More</button>
                    </div>

                    {/* Navigation Links */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <div className="flex flex-col space-y-1 mt-2">
                            <Link to="/" className="text-black hover:text-black">Home</Link>
                            <Link to="/aboutUs" className="text-black hover:text-black">About</Link>
                            <Link to="/shop" className="text-black hover:text-black">Shop</Link>
                            <Link to="/contactUs" className="text-black hover:text-black">Contact</Link>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-blue-600 text-xl hover:text-black" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" className="text-blue-400 text-xl hover:text-black" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" className="text-red-600 text-xl hover:text-black" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" className="text-blue-800 text-xl hover:text-black" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://pinterest.com" className="text-red-600 text-xl hover:text-black" aria-label="Pinterest">
                            <FaPinterest />
                        </a>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="mt-8 border-t border-gray-700 pt-4">
                    <p className="text-black text-center">
                        <a href="/privacy" className="hover:text-black">Privacy Policy</a> |
                        <a href="/terms" className="hover:text-black"> Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;