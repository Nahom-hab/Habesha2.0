import React, { useEffect, useRef, useState } from 'react'
import cup3 from '../assets/cou3.jpeg'
import { FaChevronDown, FaFilter } from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import { useLocation } from 'react-router-dom'
import useProduct from '../zustand/useProduct'
import Loading from '../components/Loading'


export default function Couples() {
    const { products } = useProduct()
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef(null);
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
    const filteredProducts = products?.filter((product) => {
        const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
        const couple = product.productType === 'couple'

        return inPriceRange && couple;
    });



    return (
        <div className='bg-primary'>
            <div className='w-full   h-[300px]  relative'>
                <img src={cup3} alt="" className="w-full object-cover h-[400px] brightness-50" />

                <div className='absolute inset-0 flex flex-col mt-52 items-center justify-center gap-1 text-white'>
                    <div className='md:text-5xl text-center  text-[25px] font-bold'>{filteredProducts ? filteredProducts.length : '10'}+ Unique Couple Designs For You</div>
                    <div className='rounded-lg px-3 py-1 text-xl text-white border w-fit border-white mt-3 '>
                        Explore More
                    </div>
                </div>
            </div>
            <div className='flex w-full flex-col items-center mt-10 pb-20 justify-center'>
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
                                className={`absolute ${isFilterOpen ? '' : 'hidden'} right-0 top-10 w-64 h-auto rounded-md bg-primary shadow-lg p-6 border border-gray-300`}
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
                                            className='w-[48%] accent-[#A78C6E]'
                                        />
                                        <input
                                            type='range'
                                            min='0'
                                            max='100000'
                                            value={priceRange[1]}
                                            onChange={handleMaxPriceChange}
                                            className='w-[48%] accent-[#A78C6E]'
                                        />
                                    </div>
                                    <div className='flex justify-between text-sm text-gray-600 mt-2'>
                                        <span>Min: ${priceRange[0]}</span>
                                        <span>Max: ${priceRange[1]}</span>
                                    </div>
                                </div>



                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className='w-full bg-gradient-to-r from-[#caae8d] to-[#A78C6E] text-white py-2 rounded-md transition-transform transform hover:scale-105'
                                >
                                    Apply Filters
                                </button>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='mt-5 w-[90%] md:w-[80%]'>

                    {/* Product Grid */}
                    {filteredProducts ?
                        (
                            <div className='grid gap-3 pc2:grid-cols-3 grid-cols-1 iphone:grid-cols-2'>
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product._id} data={product} />
                                ))}
                            </div>
                        ) : <Loading />}


                </div>
            </div>

        </div >
    )
}
