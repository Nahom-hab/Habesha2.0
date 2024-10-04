import React, { useEffect, useRef, useState } from 'react';

import ProductCard from '../components/ProductCard';
import { FaChevronDown, FaFilter } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import useProduct from '../zustand/useProduct';



export default function Shop() {
    const { products } = useProduct()
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
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
        <div className='bg-primary flex flex-col md:pt-10 items-center justify-center pb-44'>
            <div className='lg:[w-90%] w-[98%] xl:w-[82%]'>
                <div className='flex justify-between items-center'>
                    <div className='md:text-4xl text-3xl py-3 ml-2 pb-6 flex justify-between font-semibold'>
                        Our Products
                    </div>
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

                {/* Product Grid */}
                <div className='grid gap-2 pc2:grid-cols-3 grid-cols-1 iphone:grid-cols-2'>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product._id} data={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
