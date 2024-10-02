import React from 'react'
import { FaCartPlus, FaSearch, FaUser } from 'react-icons/fa'

export default function Navigation() {
    return (
        <div className='flex bg-primary py-5 justify-between px-5'>
            <h1>
                Habesha
            </h1>
            <div className='hidden md:flex gap-5'>
                <div>Home</div>
                <div>Products</div>
                <div>About Us</div>
                <div>Contact Us</div>
            </div>

            <div className='flex gap-3'>
                <div className="flex items-center bg-gray-200 px-1 rounded">
                    <FaSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search."
                        className="bg-transparent outline-none text-gray-700"
                    />
                </div>
                <div><FaUser /></div>
                <div><FaCartPlus /></div>
            </div>
        </div>
    )
}
