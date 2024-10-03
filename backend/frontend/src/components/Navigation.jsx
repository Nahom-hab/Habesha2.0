import React, { useState } from 'react';
import { FaCartPlus, FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ha from '../assets/haba.png'

export default function Navigation() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const isActiveLink = (path) => {
        return location.pathname === path ? 'bg-[#A78C6E] text-white' : 'hover:bg-gray-200';
    };

    return (
        <div className='relative'>
            {/* Main navigation bar */}
            <div className='flex bg-primary py-5 justify-between px-5'>
                <Link to={'/'} onClick={closeSidebar} className={`px-3 py-2 rounded `}>
                    <img src={ha} alt="" />
                </Link>
                <div className='hidden md:flex gap-3'>
                    <Link to={'/'} className={`px-3 py-1 flex  items-center rounded ${isActiveLink('/')}`}>Home</Link>
                    <Link to={'/shop'} className={`px-3 py-1 flex items-center rounded ${isActiveLink('/shop')}`}>Products</Link>
                    <Link to={'/family'} className={`px-3 py-1 flex  items-center rounded ${isActiveLink('/family')}`}>Family</Link>
                    <Link to={'/couples'} className={`px-3 py-1 flex  items-center rounded ${isActiveLink('/couples')}`}>Couples</Link>
                    <Link to={'/aboutUs'} className={`px-3 py-1 flex   items-center rounded ${isActiveLink('/aboutUs')}`}>About Us</Link>
                    <Link to={'/contactUs'} className={`px-3 py-1 flex items-center rounded ${isActiveLink('/contactUs')}`}>Contact Us</Link>
                </div>

                <div className='flex items-center gap-3'>
                    <div className="flex items-center px-3 py-1 w-32 md:w-52 bg-gray-200 rounded">
                        <FaSearch className="text-black mr-2 flex-shrink-0" /> {/* Ensure the icon doesn't shrink */}
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-gray-700 w-full" /* Input fills the remaining space */
                        />
                    </div>
                    <div className='text-xl'><FaCartPlus /></div>
                    <div className='md:hidden text-xl' onClick={toggleSidebar}>
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>

            </div>

            {/* Sidebar for mobile */}
            <div className={`fixed top-0 right-0 h-full w-44 z-50 bg-primary transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-start py-10 px-5 space-y-5">
                    <Link to={'/'} onClick={closeSidebar} className={`px-3 py-2 rounded ${isActiveLink('/')}`}>Home</Link>
                    <Link to={'/shop'} onClick={closeSidebar} className={`px-3 py-2 rounded ${isActiveLink('/shop')}`}>Products</Link>
                    <Link to={'/family'} onClick={closeSidebar} className={`px-3 py-2 rounded ${isActiveLink('/family')}`}>Family</Link>
                    <Link to={'/couples'} onClick={closeSidebar} className={`px-3 py-2 rounded ${isActiveLink('/couples')}`}>Couples</Link>
                    <Link to={'/aboutUs'} onClick={closeSidebar} className={`px-3 py-2 rounded ${isActiveLink('/aboutUs')}`}>About Us</Link>
                    <Link to={'/contactUs'} onClick={closeSidebar} className={`px-3 py-2 rounded ${isActiveLink('/contactUs')}`}>Contact Us</Link>
                </div>
            </div>

            {/* Overlay when sidebar is open */}
            {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={closeSidebar}></div>}
        </div>
    );
}
