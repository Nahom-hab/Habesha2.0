import React, { useEffect, useRef, useState } from 'react'

import img1 from '../assets/couple1.jpeg'
import img2 from '../assets/couple2.jpeg'
import cup1 from '../assets/couple/cue1.jpeg'
import cup2 from '../assets/couple/cue2.jpeg'
import cup3 from '../assets/couple/cou3.jpeg'
import cup4 from '../assets/couple/cue4.jpeg'
import cup5 from '../assets/couple/cue5.jpeg'
import cup6 from '../assets/couple/cue6.jpeg'
import cup7 from '../assets/couple/cue7.jpeg'
import cup8 from '../assets/couple/cue8.jpeg'
import cup9 from '../assets/couple/cue9.jpeg'


import { FaChevronDown, FaFilter } from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import { useLocation } from 'react-router-dom'
const products = [
    { id: 1, name: 'Product 1', price: 25000, type: 'family', image: img2 },
    { id: 2, name: 'Product 2', price: 50000, type: 'family', image: img1 },
    { id: 3, name: 'Product 3', price: 75000, type: 'family', image: cup3 },
    { id: 4, name: 'Product 4', price: 90000, type: 'family', image: cup2 },
    { id: 5, name: 'Product 1', price: 25000, type: 'family', image: cup4 },
    { id: 6, name: 'Product 2', price: 50000, type: 'family', image: cup9 },
    { id: 7, name: 'Product 3', price: 75000, type: 'family', image: cup5 },
    { id: 8, name: 'Product 4', price: 90000, type: 'family', image: cup6 },
    { id: 9, name: 'Product 1', price: 25000, type: 'family', image: cup7 },
    { id: 10, name: 'Product 1', price: 25000, type: 'family', image: cup8 },
    { id: 11, name: 'Product 1', price: 25000, type: 'family', image: cup1 },

];



export default function Couples() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef(null);
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [selectedTypes, setSelectedTypes] = useState({
        family: false,
        couple: false,
        male: false,
        female: false,
        bridal: false,
    });
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Handle price range change
    const handleMinPriceChange = (e) => {
        setPriceRange([parseInt(e.target.value), priceRange[1]]);
    };

    const handleMaxPriceChange = (e) => {
        setPriceRange([priceRange[0], parseInt(e.target.value)]);
    };

    // Handle selecting/deselecting product types
    const handleTypeChange = (type) => {
        setSelectedTypes((prevState) => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };

    // Close filter when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsFilterOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [filterRef]);

    // Filter products by price range and selected types
    const filteredProducts = products.filter((product) => {
        const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];

        // Check if any type is selected and filter by selected types
        const isAnyTypeSelected = Object.values(selectedTypes).some((selected) => selected);
        const matchesType = !isAnyTypeSelected || selectedTypes[product.type];

        return inPriceRange && matchesType;
    });



    return (
        <div>
            <div className='w-full   h-[300px]  relative'>
                <img src={cup3} alt="" className="w-full object-cover h-[400px] brightness-50" />

                <div className='absolute inset-0 flex flex-col mt-52 items-center justify-center gap-1 text-white'>
                    <div className='md:text-5xl text-center  text-[25px] font-bold'>22+ Unique Couple Designs For You</div>
                    <div className='rounded-lg px-3 py-1 text-xl text-white border w-fit border-white mt-3 '>
                        Explore More
                    </div>
                </div>
            </div>
            <div className='flex w-full flex-col items-center mt-10 mb-20 justify-center'>
                <div className='mt-[100px] w-[80%] flex justify-between'>
                    <div className='md:text-4xl text-3xl font-semibold'>Family Habesha</div>
                    <div>
                        <div className='relative'>
                            <div
                                onClick={() => {
                                    setIsFilterOpen(!isFilterOpen);
                                }}
                                className='flex px-3 py-1 bg-gray-200 rounded-lg text-xl items-center gap-1'
                            >
                                <FaFilter className='text-[14px]' /> Filter <FaChevronDown className='text-[10px]' />
                            </div>
                            <div
                                ref={filterRef}
                                className={`absolute ${isFilterOpen ? '' : 'hidden'} right-0 top-10 w-64 h-auto rounded-md bg-white shadow-lg p-6 border border-gray-300`}
                            >
                                {/* Price Range Filter */}
                                <div className='mb-6'>
                                    <label className='block mb-2 text-sm font-semibold text-gray-700'>Price Range</label>
                                    <div className='flex justify-between'>
                                        <input
                                            type='range'
                                            min='0'
                                            max='100000'
                                            value={priceRange[0]}
                                            onChange={handleMinPriceChange}
                                            className='w-[48%] accent-blue-600'
                                        />
                                        <input
                                            type='range'
                                            min='0'
                                            max='100000'
                                            value={priceRange[1]}
                                            onChange={handleMaxPriceChange}
                                            className='w-[48%] accent-blue-600'
                                        />
                                    </div>
                                    <div className='flex justify-between text-sm text-gray-600 mt-2'>
                                        <span>Min: ${priceRange[0]}</span>
                                        <span>Max: ${priceRange[1]}</span>
                                    </div>
                                </div>

                                {/* Product Type Filter */}
                                <div className='mb-6'>
                                    <label className='block mb-2 text-sm font-semibold text-gray-700'>Product Type</label>
                                    <div className='flex flex-col'>
                                        {['family', 'couple', 'male', 'female', 'bridal'].map((type) => (
                                            <label key={type} className='flex items-center mb-1'>
                                                <input
                                                    type='checkbox'
                                                    checked={selectedTypes[type]}
                                                    onChange={() => handleTypeChange(type)}
                                                    className='mr-2 accent-blue-600'
                                                />
                                                <span className='text-gray-700'>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className='w-full bg-blue-600 text-white py-2 rounded-md transition-transform transform hover:scale-105'
                                >
                                    Apply Filters
                                </button>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='mt-5 w-[90%] md:w-[80%]'>

                    {/* Product Grid */}
                    <div className='grid gap-3 pc2:grid-cols-3 grid-cols-1 iphone:grid-cols-2'>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} data={product.image} />
                        ))}
                    </div>

                </div>
            </div>

        </div >
    )
}
