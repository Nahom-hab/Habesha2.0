import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaEnvelope } from 'react-icons/fa';

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

                    {/* Newsletter Signup */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold">Subscribe to our Newsletter</h4>
                        <div className="flex mt-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 rounded-l-md border  focus:outline-none"
                            />
                            <button className=" bg-[#A78C6E] px-4 py-2 rounded-r-md text-white">Subscribe</button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <div className="flex flex-col space-y-1 mt-2">
                            <a href="/" className="text-black hover:text-black">Home</a>
                            <a href="/about" className="text-black hover:text-black">About</a>
                            <a href="/services" className="text-black hover:text-black">Services</a>
                            <a href="/contact" className="text-black hover:text-black">Contact</a>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-black hover:text-black" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" className="text-black hover:text-black" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" className="text-black hover:text-black" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" className="text-black hover:text-black" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://pinterest.com" className="text-black hover:text-black" aria-label="Pinterest">
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
