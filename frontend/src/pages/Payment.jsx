import React, { useEffect, useState } from "react";
import logo1 from "../assets/logo5.png";
import logo2 from "../assets/logo4.png";
import logo3 from "../assets/logo2.png";
import { FaArrowLeft, FaCheckCircle, FaCopy } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useProduct from "../zustand/useProduct";

const bankAccounts = [
    { id: 1, name: "Commercial Bank", account: "1000537602329", img: logo1 },
    { id: 2, name: "Telebirr", account: "0907702898", img: logo2 },
    { id: 3, name: "Awash Bank", account: "013200559831700", img: logo3 },
];

export default function Payment() {
    const navigate = useNavigate();
    const { cartProduct, setCartProduct } = useProduct();
    let totalMoney = 0;

    cartProduct.forEach((element) => {
        totalMoney += element.quantity * element.price;
    });

    const [selectedBank, setSelectedBank] = useState(bankAccounts[0]);
    const [phone, setPhone] = useState("");
    const [imgFile, setImgFile] = useState(null);
    const [copied, setCopied] = useState(false);
    const [adress, setAdress] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => setError(""), 2000);
            return () => clearTimeout(timeout);
        }
    }, [error]);

    const handleReceiptUpload = (event) => {
        const file = event.target.files[0];
        setImgFile(file);
    };

    const handleSubmit = async () => {
        setError("");
        let order = []
        cartProduct.map((item) => order.push({ productId: item._id, amount: item.quantity }));


        if (!phone || !imgFile || !name || !adress || cartProduct.length === 0) {
            setError("All fields are required");
            return;
        }

        try {

            setLoading(true);
            const formData = new FormData();
            formData.append("selectedBank", selectedBank.name);
            formData.append("address", adress);
            formData.append("fullName", name);
            formData.append("phoneNumber", phone);
            formData.append("receipt", imgFile);
            formData.append("order", JSON.stringify(order));
            formData.append("totalPrice", totalMoney);

            // for (let [key, value] of formData.entries()) {
            //     console.log(`${key}:`, value);
            // }
            const response = await fetch("api/order", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            console.log(data);


            if (!response.ok) {
                throw new Error(data.message || "Failed to submit receipt");
            }
            navigate('/success', { state: { orderDetails: data, cartProduct: cartProduct } });
            setCartProduct([])

        } catch (error) {
            setError(error.message || "Failed to submit receipt");
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = (accountNumber) => {
        navigator.clipboard.writeText(accountNumber)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            })
            .catch((err) => console.error("Failed to copy:", err));
    };

    return (
        <div className="bg-primary flex items-center justify-center md:py-20 p-4">
            <div className="bg-primary flex flex-col md:flex-row rounded-lg gap-6 md:gap-8 shadow-xl p-6 pl-10 w-full max-w-lg md:max-w-4xl">
                <div className="space-y-4">
                    <div className="text-gray-800 text-sm">
                        <div className="flex justify-between">
                            <p className="font-semibold text-xl mb-3">Your Payment Info:</p>
                        </div>

                        {cartProduct.length > 0 &&
                            cartProduct.map((element, index) => (
                                <div key={index} className="flex justify-between">
                                    <p>{element.name}:</p>
                                    <p>{element.quantity} X {element.price} = ETB {element.quantity * element.price}</p>
                                </div>
                            ))}

                        <div className="flex border font-bold text-gray-900 text-lg border-black border-x-0 border-b-0 pt-3 mt-3 justify-end">
                            <p><span className="text-green-600">ETB</span> {totalMoney}</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="text-black font-medium mb-2">Select a Bank</p>
                        <div className="flex gap-2">
                            {bankAccounts.map((bank) => (
                                <button
                                    key={bank.id}
                                    type="button"
                                    onClick={() => setSelectedBank(bank)}
                                    className={`py-2 px-4 flex-1 rounded-lg text-center transition focus:outline-none focus:ring ${selectedBank.id === bank.id
                                        ? "bg-gray-200 border border-black shadow-md text-gray-900"
                                        : "bg-gray-300 text-yellow-200 hover:bg-gray-400"
                                        }`}
                                    aria-label={`Select ${bank.name}`}
                                >
                                    <img src={bank.img} alt={`${bank.name} logo`} className="w-16 object-cover mx-auto" />
                                </button>
                            ))}
                        </div>
                        {selectedBank && (
                            <div className="mt-2 flex text-sm items-center justify-between px-2 bg-[#d8d7d7] p-2 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={selectedBank.img}
                                        alt={`${selectedBank.name} logo`}
                                        className="w-10 h-10 object-contain rounded-lg"
                                    />
                                    <div>
                                        <p className="text-black bg-gradient-to-r font-medium">{selectedBank.name}</p>
                                        <p className="text-black">{selectedBank.account}</p>
                                    </div>
                                </div>
                                <div
                                    onClick={() => handleCopy(selectedBank.account)}
                                    className="p-2 text-xl bg-[#b4b2b2] rounded-xl cursor-pointer"
                                    aria-label="Copy account number"
                                >
                                    {copied ? (
                                        <div className="text-[11px] flex gap-1 text-black items-center">Copied<FaCheckCircle className="text-gray-600 text-sm" /></div>
                                    ) : (
                                        <FaCopy className="text-gray-600" />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    {error && (<div className="text-red-500 text-start text-sm">{error}</div>)}

                    <div className="mb-3 flex items-center gap-4">
                        <div className="flex-1">
                            <label htmlFor="receipt" className="block text-black font-medium mb-2">Bank Receipt</label>
                            <input
                                id="receipt"
                                type="file"
                                accept="image/*"
                                onChange={handleReceiptUpload}
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => document.getElementById("receipt").click()}
                                className={`py-2 px-4 ${imgFile ? "text-sm" : ""} bg-[#d8d7d7] flex justify-center items-center text-black rounded-lg w-full`}
                                aria-label="Upload receipt"
                            >
                                {imgFile ? "Change Receipt" : <div className="flex items-center gap-2">Upload Receipt <div className="w-5 h-5 pb-1 text-2xl flex rounded-full items-center bg-[#b2b7c2]">+</div></div>}
                            </button>
                        </div>
                        {imgFile && (
                            <img
                                src={URL.createObjectURL(imgFile)}
                                alt="Uploaded Receipt"
                                className="w-32 h-20 object-cover rounded-lg border border-yellow-400"
                            />
                        )}
                    </div>
                </div>
                <div>
                    <div className="mb-3">
                        <label htmlFor="name" className="block text-black font-medium mb-2">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 py-3 bg-[#d8d7d7] placeholder:text-gray-600 text-black rounded-lg"
                            placeholder="Eg. Abebe Bikila"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="adress" className="block text-black font-medium mb-2">Address</label>
                        <input
                            id="adress"
                            type="text"
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                            className="w-full p-3 py-3 bg-[#d8d7d7] placeholder:text-gray-600 text-black rounded-lg"
                            placeholder="Eg. Semit, Addis Ababa"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="block text-black font-medium mb-2">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-3 py-3 bg-[#d8d7d7] placeholder:text-gray-600 text-black rounded-lg"
                            placeholder="Eg. 0912345678"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                        className="w-full bg-gradient-to-r from-[#caae8d] to-[#A78C6E] hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg transition duration-300"
                    >
                        {loading ? "Loading..." : "Pay Now"}
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-6">
                        Need help? Contact us on Telegram <a href="https://t.me/nahom_hab" className="text-black">@nahom_hab</a> if you haven’t received your ticket.
                    </p>
                </div>
            </div>
        </div>
    );
}
