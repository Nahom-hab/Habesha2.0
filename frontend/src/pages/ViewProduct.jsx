import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate, Link } from 'react-router-dom';
import { FaFacebookF, FaPinterestP, FaShoppingCart, FaTwitter, FaInstagram, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import axios from 'axios';
import useProduct from '../zustand/useProduct';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

export default function ViewProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const { cartProduct, products, setCartProduct } = useProduct();
    const [filteredProducts, setFilterdProducts] = useState([])
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [error, setError] = useState(null);
    const { pathname } = useLocation();
    const [productAddedPopup, setProductAddedPopup] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        let timeout;
        if (productAddedPopup) {
            timeout = setTimeout(() => {
                setProductAddedPopup(false);
            }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [productAddedPopup]);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/api/product/${id}`);
                setProduct(response.data);
                setFilterdProducts(products.filter(element => (element.productType === response.data.productType && element._id !== response.data._id)))

            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load product. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const IsInCart = () => {
        return cartProduct.some(item => item._id === product?._id);

    }

    const handleAddToCart = () => {
        const productExists = IsInCart();

        if (!productExists) {
            const cart = [...cartProduct, { ...product, quantity: 1 }];
            setCartProduct(cart);
            localStorage.setItem('cart', JSON.stringify(cart));
            setProductAddedPopup(true);
        }
    };

    const handleRemoveFromCart = () => {
        const productExists = IsInCart();

        if (productExists) {
            const cart = cartProduct.filter(item => item._id !== product?._id);
            setCartProduct(cart);
            localStorage.setItem('cart', JSON.stringify(cart));
            setProductAddedPopup(true);
        }
    };

    const handleBuyNowClick = () => {
        setIsPopupVisible(true);
    };

    if (loading) return <Loading />;
    if (error) return <div>{error}</div>;
    if (!product) return <div>Product not found.</div>;

    return (
        <div className='pb-10 flex flex-col items-center justify-center'>
            {productAddedPopup && (
                <div className='fixed top-20 z-50 right-2 bg-green-500 text-white p-3 rounded-lg shadow-lg'>
                    {product.name} added to cart
                </div>
            )}
            <div className='flex md:flex-row md:pt-5  flex-col'>
                <div className='relative'>
                    <img
                        className='mb-6 md:rounded-xl w-full md:w-[400px] h-[480px] lg:w-[500px] lg:h-[550px] object-cover'
                        src={product.images[0]}
                        alt={product.name}
                    />
                    <div className='absolute top-3 right-3 bg-[#A78C6E] text-white rounded-xl px-2 py-1'>
                        {product.productType}
                    </div>
                </div>
                <div className='px-8 md:mt-20 md:w-[500px]'>
                    <div className='flex justify-between'>
                        <div className='font-bold pb-2 md:text-4xl text-2xl'>{product.name}</div>
                        <div onClick={() => {
                            IsInCart() ? handleRemoveFromCart() : handleAddToCart()
                        }} className='top-2 right-3 items-center h-fit text-[12px] px-2 py-1 rounded-lg hover:opacity-80 hover:cursor-pointer bg-gray-300 flex gap-2'>
                            <div className=' bg-gray-200 text-black px-2 py-1 whitespace-nowrap rounded-lg'>
                                {IsInCart() ? 'Remove From Cart' : 'Add To Cart'}
                            </div>
                            <FaShoppingCart className='text-gray-700 group text-lg hover:text-gray-600' />
                        </div>
                    </div>
                    <div className='mt-5 text-xl text-gray-600'>
                        Founded with a passion for celebrating Ethiopian culture, our shop specializes in exquisite Habesha clothing. Each piece is a testament to our rich heritage, crafted with love and precision.
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='text-2xl mt-4'>
                            <span className='mr-3'>Price:</span>{product.price} <span className='text-green-500 font-semibold'>ETB</span>
                        </div>

                    </div>
                    <div className='mt-5 flex gap-3 text-2xl'>
                        <div className='flex flex-wrap gap-2 text-[15px]'>
                            {['#habesha', '#habesha-cloths', '#ethiopian-cloths', '#ethiopian-habesha', '#fit', '#traditional-cloths'].map((tag, index) => (
                                <span key={index} className='bg-gray-200 text-black rounded-2xl px-2'>{tag}</span>
                            ))}
                        </div>
                    </div>


                    <div onClick={handleBuyNowClick} className='text-sm mt-5 rounded-xl flex items-center gap-2 justify-center mb-5 lg:text-xl hover:cursor-pointer hover:bg-[#9b7d5b]  bg-gradient-to-r from-[#caae8d] to-[#A78C6E] text-white text-center py-4 w-full'>
                        ORDER NOW
                        <FaShoppingCart className='text-white  text-lg hover:text-gray-600' />

                    </div>


                    <ul className="flex mb-10 items-center gap-5">
                        <li><a href="https://www.facebook.com/share/1KNxNmL2vH/?mibextid=LQQJ4d" aria-label="Facebook" className="text-xl hover:text-2xl text-[#201408] "><FaFacebookF /></a></li>
                        <li><a href="https://www.instagram.com/tekehabesha/profilecard/?igsh=eXZ5Y2Nqc2l2dGM0" aria-label="Instagram" className="text-xl hover:text-2xl text-[#201408] "><FaInstagram /></a></li>
                        <li><a href="https://t.me/Tekehabesha" aria-label="Telegram" className="text-xl  hover:text-2xl  text-[#201408] transition-transform duration-500"><FaTelegramPlane /></a></li>
                    </ul>
                </div>


            </div>

            <div className='w-full md:px-20 '>
                <div className='font-semibold md:text-3xl text-2xl px-4 '>Similar Exclusive Products</div>
                <div className='mt-5 px-5'>

                    {/* Product Grid */}
                    <div className='grid gap-3 pc2:grid-cols-3 grid-cols-1 iphone:grid-cols-2'>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product._id} data={product} />
                        ))}
                    </div>

                </div>
            </div>
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-80">
                        <h3 className="font-semibold text-lg mb-4">Buy Now with us</h3>
                        <ul className="space-y-2 mb-4">
                            <li className="flex text-xl bg-slate-200 rounded-xl px-2 py-1 w-fit items-center">
                                <FaFacebookF className="text-blue-600 mr-2" />
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                            </li>
                            <li className="flex text-xl bg-slate-200 rounded-xl px-2 py-1 w-fit items-center">
                                <FaInstagram className="text-red-600 mr-2" />
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                            </li>
                            <li className="flex text-xl bg-slate-200 rounded-xl px-2 py-1 w-fit items-center">
                                <FaTwitter className="text-blue-400 mr-2" />
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
                            </li>
                            <li className="flex text-xl bg-slate-200 rounded-xl px-2 py-1 w-fit items-center">
                                <FaPinterestP className="text-red-600 mr-2" />
                                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Pinterest</a>
                            </li>
                            <li className="flex text-xl bg-slate-200 rounded-xl px-2 py-1 w-fit items-center">
                                <FaLinkedinIn className="text-blue-800 mr-2" />
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <h4 className="font-semibold text-md mb-2">Contact Us</h4>
                            <p className="text-sm text-gray-600">Phone: <a href="tel:+251907702898" className="text-blue-600 hover:underline">+251 907 702 898</a></p>
                            <p className="text-sm text-gray-600">Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">nahomhabtamu147@gmail.com</a></p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <button onClick={() => {
                                handleAddToCart();
                                navigate('/cart');
                            }} className="mt-4 bg-gray-400 text-white rounded-lg px-4 py-2">Buy Here Now</button>
                            <button onClick={() => setIsPopupVisible(false)} className="mt-4 bg-gray-400 text-white rounded-lg px-4 py-2">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}