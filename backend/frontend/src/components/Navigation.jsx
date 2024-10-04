import React, { useState } from 'react';
import { FaCartPlus, FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ha from '../assets/haba.png'
import useProduct from '../zustand/useProduct';
import FetchProducts from '../hooks/fetchproducts';

export default function Navigation() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const { cartProduct } = useProduct()
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    FetchProducts()

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
                <div className='hidden text-[14px] lg:flex gap-1'>
                    <Link to={'/'} className={`px-3 py-1 flex  items-center rounded ${isActiveLink('/')}`}>Home</Link>
                    <Link to={'/shop'} className={`px-3 py-1 flex items-center rounded ${isActiveLink('/shop')}`}>Products</Link>
                    <Link to={'/family'} className={`px-3 py-1 flex  items-center rounded ${isActiveLink('/family')}`}>Family</Link>
                    <Link to={'/couples'} className={`px-3 py-1 flex  items-center rounded ${isActiveLink('/couples')}`}>Couples</Link>
                    <Link to={'/male'} className={`px-3 py-1 flex   items-center rounded ${isActiveLink('/male')}`}>Male</Link>
                    <Link to={'/female'} className={`px-3 py-1 flex items-center rounded ${isActiveLink('/female')}`}>Female</Link>

                    <Link to={'/aboutUs'} className={`px-3 py-1 flex   items-center rounded ${isActiveLink('/aboutUs')}`}>About Us</Link>
                    <Link to={'/contactUs'} className={`px-3 py-1 flex items-center rounded ${isActiveLink('/contactUs')}`}>Contact Us</Link>
                </div>

                <div className='flex items-center gap-5'>
                    <Link to={'/cart'} className='text-3xl flex gap-2 items-center'>
                        <div className='relative'>
                            <FaCartPlus />
                            {cartProduct.length === 0 ? ('') : (
                                <div className='absolute  w-5 h-5 flex items-center justify-center text-[10px] rounded-full top-[-6px] right-[-5px] bg-red-500 text-white'>
                                    {cartProduct.length}
                                </div>
                            )}

                        </div>
                        <div className='text-lg'>Cart</div>
                    </Link>
                    <div className='lg:hidden text-xl' onClick={toggleSidebar}>
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
                    <Link to={'/male'} onClick={closeSidebar} className={`px-3 py-1 rounded ${isActiveLink('/male')}`}>Male</Link>
                    <Link to={'/female'} onClick={closeSidebar} className={`px-3 py-1 rounded ${isActiveLink('/female')}`}>Female</Link>

                    <Link to={'/aboutUs'} onClick={closeSidebar} className={`px-3 py-2 rounded ${isActiveLink('/aboutUs')}`}>About Us</Link>
                    <Link to={'/contactUs'} onClick={closeSidebar} className={`px-3 py-2 rounded ${isActiveLink('/contactUs')}`}>Contact Us</Link>
                </div>
            </div>

            {/* Overlay when sidebar is open */}
            {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={closeSidebar}></div>}
        </div>
    );
}
