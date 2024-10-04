import React, { useEffect, useRef, useState } from 'react'
import fam14 from '../assets/femaleee.jpeg'
import { FaChevronDown, FaFilter } from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import { useLocation } from 'react-router-dom'
import useProduct from '../zustand/useProduct'



export default function Female() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef(null);
    const { products } = useProduct()
    const [priceRange, setPriceRange] = useState([0, 100000]);

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

    const filteredProducts = products.filter((product) => {
        const fam = product.productType === 'female'
        const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];


        return fam && inPriceRange;
    });



    return (
        <div>
            <div className='w-full   h-[300px]  relative'>
                <img src={fam14} alt="" className="w-full object-cover h-[400px] brightness-50" />

                <div className='absolute inset-0 flex flex-col mt-52 items-center justify-center gap-1 text-white'>
                    <div className='md:text-5xl text-center  text-[25px] font-bold'>20+ Unique Female Habesha For You</div>
                    <div className='rounded-lg px-3 py-1 text-xl text-white border w-fit border-white mt-3 '>
                        Explore More
                    </div>
                </div>
            </div>
            <div className='flex w-full flex-col items-center mt-10 mb-20 justify-center'>
                <div className='mt-[100px] w-[80%] flex justify-between'>
                    <div className='md:text-4xl text-2xl mr-2 font-semibold'>Female Habesha</div>
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
                            <ProductCard key={product._id} data={product} />
                        ))}
                    </div>

                </div>
            </div>

        </div >
    )
}
