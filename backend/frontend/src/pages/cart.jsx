import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import useProduct from '../zustand/useProduct';

const CartPage = () => {
    const { cartProduct, setCartProduct } = useProduct();

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartProduct.filter(item => item._id !== itemId);
        setCartProduct(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleUpdateQuantity = (itemId, newQuantity) => {
        if (newQuantity <= 0) {
            handleRemoveItem(itemId);
        } else {
            const updatedCart = cartProduct.map(item =>
                item._id === itemId ? { ...item, quantity: newQuantity } : item
            );
            setCartProduct(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };

    const getTotalPrice = () => {
        return cartProduct.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const discount = 10;
    const shipping = 5;
    const taxRate = 0.15;
    const taxAmount = getTotalPrice() * taxRate;
    const grandTotal = getTotalPrice() - discount + shipping + taxAmount;

    return (
        <div className="bg-primary w-full flex pb-32 justify-center p-6">
            <div className="w-full md:w-[80%]">
                <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Cart Items Section */}
                    <div className="w-full lg:w-2/3 bg-gray-100 p-4 rounded-lg shadow-lg">
                        {cartProduct?.length === 0 ? (
                            <p className="text-center p-6 text-gray-600">Your cart is empty.</p>
                        ) : (
                            <div>
                                {cartProduct.map(item => (
                                    <div key={item._id} className="flex flex-col md:flex-row justify-between items-start p-4 bg-gray-100 shadow-md rounded-lg mb-4 hover:shadow-lg transition duration-300">
                                        <img src={item.images[0]} alt={item.name} className="w-full md:w-28 h-28 object-cover rounded-md mb-4 md:mb-0" />

                                        <div className="flex-1 md:ml-6">
                                            <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
                                            <div className='flex md:items-start items-center md:flex-col md:gap-1 gap-3'>
                                                <div className="flex items-center mt-2 space-x-2">
                                                    <button
                                                        onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                                                        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                                                        <AiOutlineMinus />
                                                    </button>
                                                    <span className="px-4 text-lg font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                                                        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                                                        <AiOutlinePlus />
                                                    </button>
                                                </div>
                                                <p className="mt-2 text-gray-500">Price: <span className="text-green-600 font-semibold">ETB {item.price.toFixed(2)}</span></p>

                                            </div>
                                        </div>

                                        <div className="flex items-center mt-4 md:mt-0">
                                            <button
                                                onClick={() => handleRemoveItem(item._id)}
                                                className="text-red-500 hover:text-red-600 p-2 rounded-full transition duration-300">
                                                <FaTrashAlt size={20} />
                                            </button>
                                            <p className="ml-4 text-lg font-bold text-gray-800">ETB {(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Order Summary Section */}
                    <div className="w-full lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg sticky top-16">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Order Summary</h2>

                        <div className="text-lg text-gray-700">
                            <div className="flex justify-between mb-3">
                                <span>Subtotal</span>
                                <span className="font-semibold">ETB {getTotalPrice().toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between mb-3">
                                <span>Discount</span>
                                <span className="font-semibold text-green-600">-ETB {discount.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between mb-3">
                                <span>Shipping</span>
                                <span className="font-semibold">ETB {shipping.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between mb-3">
                                <span>Taxes (15%)</span>
                                <span className="font-semibold">ETB {taxAmount.toFixed(2)}</span>
                            </div>

                            <hr className="my-4" />

                            <div className="flex justify-between text-xl font-bold text-gray-800">
                                <span>Grand Total</span>
                                <span className="text-green-600">ETB {grandTotal.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="mt-6 w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
