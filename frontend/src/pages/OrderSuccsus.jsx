import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const OrderSuccess = () => {

    const loacation = useLocation()
    const orderDetails = loacation.state.orderDetails
    const cartProduct = loacation.state.cartProduct
    return (
        <div className="bg-primary min-h-screen flex pt-20 px-3 justify-center">
            <div className="bg-primary shadow-lg h-fit rounded-lg p-6 max-w-2xl w-full">
                {/* Header Section */}
                <div className="text-center">
                    <AiOutlineCheckCircle className="mx-auto h-16 w-16 text-green-500" />
                    <h2 className="text-2xl font-bold text-gray-800 mt-4">Order Successful!</h2>
                    <p className="text-gray-600 mt-2">
                        Thank you for your order. We will contact you shortly.
                    </p>
                </div>

                {/* Order Summary Section */}
                <div className="mt-6">
                    <div className="bg-[#A78C6E] text-white p-4 rounded-lg shadow-sm mt-4">
                        <p>
                            <strong>Full Name:</strong> {orderDetails.fullName}
                        </p>
                        <p>
                            <strong>Phone Number:</strong> {orderDetails.phoneNumber}
                        </p>
                        <p>
                            <strong>Address:</strong> {orderDetails.address}
                        </p>
                        <p>
                            <strong>Total Price:</strong> ETB{orderDetails.totalPrice.toFixed(2)}
                        </p>
                    </div>

                    {/* Items List */}
                    <h4 className="text-lg font-semibold text-gray-800 mt-6">Items:</h4>
                    <div className="text-gray-800 text-sm">


                        {cartProduct.length > 0 &&
                            cartProduct.map((element, index) => (
                                <div key={index} className="flex justify-between">
                                    <p>{element.name}:</p>
                                    <p>{element.quantity} X {element.price} = ETB {element.quantity * element.price}</p>
                                </div>
                            ))}

                        <div className="flex border font-bold text-gray-900 text-lg border-black border-x-0 border-b-0 pt-3 mt-3 justify-end">
                            <p><span className="text-green-600">ETB</span> {orderDetails.totalPrice}</p>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        Need assistance? <a href="/contactUs" className="text-blue-500 hover:underline">Contact Us</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;
