import React, { useEffect } from 'react';
import axios from 'axios';
import useProduct from '../zustand/useProduct';

export default function FetchProducts() {
    const { setProducts } = useProduct();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/product');
                if (response && response.data) {
                    setProducts(response.data); // Assuming you want the actual data, not the full response object
                    localStorage.setItem('products', JSON.stringify(response.data));
                    console.log(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts(); // Call the fetch function
    }, [setProducts]); // Adding setProducts to dependencies

    return null; // This component doesn't need to render anything
}
