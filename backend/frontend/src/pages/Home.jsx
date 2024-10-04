import React from 'react'
import home1 from '../assets/home1.png'
import shadow from '../assets/ellipse.png'
import img1 from '../assets/Group1.png'
import img2 from '../assets/Group2.png'
import img3 from '../assets/Group5.png'
import img4 from '../assets/Group23.png'
import photo1 from '../assets/women1.jpeg'
import photo2 from '../assets/men1.jpeg'
import photo3 from '../assets/couple1.jpeg'
import photo4 from '../assets/couple2.jpeg'
import big1 from '../assets/big1.png'
import big2 from '../assets/big2.png'
import balck from '../assets/balck.png'
import haben from '../assets/haben.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import Fetchproducts from '../hooks/fetchproducts'

export default function Home() {
    Fetchproducts()
    const navigate = useNavigate()
    return (
        <div className='bg-primary'>
            <div className='absolute top-32 right-2 hidden md:block   md:right-12 md:top-8 '><img className='w-[560px]' src={home1} alt="" /></div>
            <div className='absolute top-8  z-10  block md:hidden   left-[-80px] '><img className='w-[400px]' src={home1} alt="" /></div>
            <img className='absolute top-32 left-[-40px] block md:hidden ' src={shadow} alt="" />
            <div className='flex flex-col top-32 z-20 w-[200px]  absolute right-0 md:hidden'>
                <div className='pl-1 text-[10px]'>Habesha is the best</div>
                <div className='font-extrabold flex flex-col text-[22px] leading-tight'><span className='whitespace-nowrap'>Explore the World</span> <span >Of <span className='text-gray-600'>Habesha</span></span> </div>
                <div className=' font-semibold mt-4 hidden md:flex text-[10px] flex-col'><span className=''>From the vibrant hues of our traditional fabrics to the </span><span>intricate patterns that adorn each piece</span></div>
                <div className='font-semibold flex text-white  md:midden mt-4 text-[10px] flex-col'>From the vibrant hues of our traditional fabrics to the intricate patterns that adorn each piece</div>
                <div className='flex justify-end pr-5'>
                    <div onClick={() => navigate('/shop')} className='mt-6 px-4 py-1 text-white animate-bounce text-sm w-fit rounded-lg bg-[#A78C6E]'>Shop Now</div>
                </div>

            </div>

            <div className='w-full flex justify-between items-center pl-20 h-[420px] md:h-[590px] bg-secondary'>
                <div className='md:block hidden'>
                    <div className='pl-1'>Habesha is the best</div>
                    <div className='font-bold flex flex-col   md:text-[60px] leading-tight'><span className='whitespace-nowrap'>Explore the World</span> <span >Of <span className='text-gray-600'>Habesha</span></span> </div>
                    <div className='flex font-semibold mt-7 flex-col'>From the vibrant hues of our traditional fabrics to the <span>intricate patterns that adorn each piece</span></div>
                    <button onClick={() => navigate('/shop')} className='mt-6 px-4 py-1 text-white text-lg animate-bounce rounded-lg bg-[#A78C6E]'>Shop Now</button>

                </div>

                <div>
                    <img className='md:block hidden' src={shadow} alt="" />
                </div>

            </div>

            <div>
                <h1 className='w-full text-center mb-3 md:mb-8 mt-8 md:mt-10 text-2xl md:text-4xl font-bold'> Exclusive Products</h1>
                <div className='flex w-full justify-between md:flex-row flex-col gap-1'>
                    <div className='flex md:h-[420px] h-[300px] gap-1'>
                        <div className='flex flex-col  w-[50%] items-center'>
                            <img className='h-full object-cover' src={photo1} alt="" />
                            <div className='font-bold text-lg'>Female Habesha</div>
                            <div>Starting from <span className='font-bold'>9000birr</span> </div>

                        </div>
                        <div className='flex md:h-[420px] flex-col  w-[50%] items-center'>
                            <img className='h-full object-cover' src={photo3} alt="" />
                            <div className='font-bold text-lg'>Couple Habesha</div>
                            <div>Starting from <span className='font-bold'>22000birr</span> </div>


                        </div>
                    </div>

                    <div className='flex md:h-[420px] mt-6  md:mt-0 h-[300px] gap-1'>

                        <div className='flex w-[50%] h-full flex-col items-center'>
                            <img className='h-full object-cover' src={photo2} alt="" />
                            <div className='font-bold text-lg'>Male Habesha</div>
                            <div>Starting from <span className='font-bold'>8000birr</span> </div>


                        </div>
                        <div className='flex  md:h-[420px] w-[50%] flex-col h-full items-center'>
                            <img className='h-full object-cover' src={photo4} alt="" />
                            <div className='font-bold text-lg'>Couple Habesha</div>
                            <div>Starting from <span className='font-bold'>23000birr</span> </div>

                        </div>
                    </div>


                </div>
            </div>

            <div className='flex md:flex-row md:mt-0 mt-10 flex-col md:items-end w-full'>

                <div className='md:block hidden w-[55%]'>
                    <img className='w-[100%]' src={big1} alt="" />
                </div>
                <div className='flex w-full md:w-[34%] md:justify-normal justify-center md:mr-6 pt-8'>
                    <div className=' md:mb-24 p-4 w-fit justify-center items-start flex flex-col  md:px-10'>
                        <div className='flex flex-col text-[23px] md:text-[40px] text-start leading-tight whitespace-nowrap   font-bold mb-7'> <span>Dressing the Whole Family</span> <span>the Habesha Way</span> </div>
                        <div className='md:text-lg font-semibold md:w-full w-[320px] leading-tight text-start text-[12px]'>Dressing a whole family can be a fun and rewarding experience. It's an opportunity to express your family's unique style and personality through your clothing choices.</div>
                        <Link to={'/family'} className='rounded-lg px-3 py-1 border w-fit animate-pulse border-black mt-2 md:mt-6'>Explore More</Link>

                    </div>
                </div>
                <div className='md:hidden mt-[-40px] block w-full'>
                    <img className='w-[100%]' src={big1} alt="" />
                </div>
            </div>


            <div className='bg-secondary flex md:flex-row  flex-col md:justify-between md:pl-20 w-full'>

                <div className='flex w-full md:w-[40%] md:justify-normal justify-center md:pt-2 pt-8'>
                    <div className=' md:mb-24 p-4 w-fit justify-center items-start flex flex-col  md:px-10'>
                        <div className='flex flex-col text-[23px] md:text-[40px] text-start leading-tight whitespace-nowrap   font-bold mb-9'> <span>Celebrating Love and </span> <span>Partnership</span> </div>
                        <div className='md:text-lg font-semibold md:w-full w-[320px]  leading-tight text-start text-[12px]'>Our Couples Section is designed to celebrate love, togetherness, and the journey that comes with building a life together
                            Our Couples Section is designed to celebrate love,
                        </div>
                        <Link to={'/couples'} className='rounded-lg px-3 py-1 border w-fit animate-pulse border-black mt-2 md:mt-5'>Explore More</Link>

                    </div>
                </div>


                <div className='md:w-[45%] md:mt-0 mt-[-40px] w-full'>
                    <img className='w-[100%]' src={big2} alt="" />
                </div>
            </div>


            <div className='mt-2 flex md:flex-row mb-[300px] flex-col md:mb-2 justify-between'>
                <div className='md:w-[77%] w-full   h-[300px]  relative'>
                    <img src={balck} alt="" className="w-full object-cover h-[600px] " />

                    <div className='absolute inset-0 flex flex-col mt-52 items-center justify-center gap-1 text-white'>
                        <div className='md:text-5xl text-center whitespace-nowrap text-[25px] font-bold'>70+ Unique Designs For You</div>
                        <div className='rounded-lg px-3 py-1 text-xl text-white border w-fit border-white mt-3 '>
                            Explore More
                        </div>
                    </div>
                </div>
                <div className='w-[30%] hidden md:block ml-2  '>
                    <img className=' object-cover h-[600px]' src={haben} alt="" />
                </div>

            </div>

            <div className='py-8 md:mt-8 mt-4 flex ml-[-4px] md:justify-center'>
                <div className=' gap-1 grid grid-cols-2 md:gap-8'>
                    <div className='space-y-2 md:space-y-0 md:space-x-8 md:flex'>
                        <img className='w-[250px]' src={img2} alt="" />
                        <img className='w-[250px]' src={img1} alt="" />
                    </div>

                    <div className='space-y-2 md:space-y-0 md:space-x-8 md:flex'>
                        <img className='w-[250px]' src={img4} alt="" />
                        <img className='w-[250px] ' src={img3} alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}
