import { create } from 'zustand'

const useProduct = create((set) => ({
    products: JSON.parse(localStorage.getItem("products")),
    setProducts: (products) => set({ products }),
    isEng: JSON.parse(localStorage.getItem("isEng")),
    setIsEng: (isEng) => set({ isEng }),
    cartProduct: localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart'))) : [],
    setCartProduct: (cartProduct) => set({ cartProduct }),
}))

export default useProduct
