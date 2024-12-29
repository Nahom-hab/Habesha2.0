import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import habeshaImage3 from '../assets/men1.jpeg';
import shop1 from '../assets/shop1.png';
import shop2 from '../assets/shop2.png';
import shop3 from '../assets/shop3.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png'; // Import marker icon
import { Link, useLocation } from 'react-router-dom';

const DefaultIcon = L.icon({
    iconUrl: markerIcon, // Use the imported marker icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function AboutUs() {
    const position = [9.03, 38.74]; // Latitude and Long
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="bg-primary flex flex-col items-center py-10 pt-0 ">


            {/* Hero Section */}
            <div className="w-full h-[400px] bg-cover bg-center rounded-xl relative" style={{ backgroundImage: `url(${shop1})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">About Us</h1>
                    <p className="text-xl mt-4 text-center animate__animated animate__fadeInUp">
                        Your destination for authentic Ethiopian Habesha clothing.
                    </p>
                    <p className="mt-6 text-center max-w-lg text-lg animate__animated animate__fadeInUp">
                        We celebrate the rich cultural heritage of Ethiopia, offering beautifully crafted clothing that reflects tradition and style.
                    </p>
                </div>
            </div>



            {/* Our Story Section */}
            <div className="mt-10 w-full max-w-4xl px-4">
                <h2 className="text-3xl font-semibold mb-5">Our Story</h2>
                <p className="text-gray-700 mb-2 animate__animated animate__fadeInLeft">
                    Founded with a passion for celebrating Ethiopian culture, our shop specializes in exquisite Habesha clothing. Each piece is a testament to our rich heritage, crafted with love and precision.
                </p>
                <p className="text-gray-700 mb-2 animate__animated animate__fadeInLeft">
                    Our journey began with a desire to share the beauty of Ethiopian traditions with the world. We believe that clothing is not just fabric; it’s a story woven into every stitch, representing the vibrant culture and history of our people.
                </p>
                <p className="text-gray-700 mb-2 animate__animated animate__fadeInLeft">
                    By collaborating with local artisans, we ensure that each garment is not only unique but also supports the livelihoods of those who create them. Join us in embracing and promoting the timeless elegance of Habesha attire.
                </p>
            </div>

            {/* Our Mission Section */}
            <div className="mt-10 w-full max-w-4xl px-4">
                <h2 className="text-3xl font-semibold mb-5">Our Mission</h2>
                <p className="text-gray-700 mb-2 animate__animated animate__fadeInLeft">
                    To provide high-quality, authentic Habesha clothing that not only reflects the beauty of our culture but also brings joy to our customers.
                </p>
                <p className="text-gray-700 mb-2 animate__animated animate__fadeInLeft">
                    We are committed to sustainable practices, ensuring that our garments are produced ethically and responsibly. Our goal is to empower local artisans while preserving the rich traditions of Habesha craftsmanship.
                </p>
                <p className="text-gray-700 mb-2 animate__animated animate__fadeInLeft">
                    Through our collections, we aim to foster a deeper appreciation for Habesha culture and heritage, inviting everyone to celebrate diversity through fashion.
                </p>
            </div>

            {/* Our Values Section */}
            <div className="mt-10 w-full px-4 max-w-4xl ">
                <h2 className="text-3xl font-semibold mb-5">Our Values</h2>
                <ul className="mb-5 text-gray-700 ">
                    <li><strong>Authenticity</strong> : We celebrate the true essence of Ethiopian culture.</li>
                    <li><strong>Quality</strong>: Each item is made with the highest standards.</li>
                    <li><strong>Community</strong>: We believe in supporting local artisans and craftsmen.</li>
                </ul>
            </div>


            {/* Call to Action Section */}
            <div className="mt-10 w-full max-w-4xl text-center">
                <h2 className="text-3xl font-semibold mb-5">Join Us on This Journey</h2>
                <p className="text-gray-700 mb-5 animate__animated animate__fadeInLeft">
                    Explore our collection and embrace the beauty of Ethiopian Habesha clothing. Together, let's celebrate our culture!
                </p>
                <Link to={'/shop'} className="bg-[#A78C6E] text-white py-2 px-4 rounded-md  transition duration-300 animate__animated animate__bounce">
                    Shop Now
                </Link>
            </div>
            {/* Shop Image and Leaflet Map */}
            <div className="flex w-full  gap-3 p-2 md:p-5">
                {/* Shop Image */}
                {/* <div className="w-full  mb-5">
                    <img src={shop1} alt="Shop" className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
                </div> */}

                {/* Leaflet Map */}
                <div className="w-full h-[400px]">
                    <MapContainer center={position} zoom={13} className="h-full">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                            <Popup>Our Shop Location.</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
