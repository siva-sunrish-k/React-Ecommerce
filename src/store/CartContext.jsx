import React, { createContext, useState, useContext } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    // Add products to cart
    const addToCart = (product, quantity = 1) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id)
            
            if (existingItem) {
                // If item exists, update quantity
                return prevCart.map(item => 
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            } else {
                // If item doesn't exist, add new item
                return [...prevCart, { ...product, quantity }]
            }
        })
    }

    // Remove product from cart
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId))
    }

    // Update product quantity in cart
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId)
            return
        }
        
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === productId 
                    ? { ...item, quantity }
                    : item
            )
        )
    }

    // Clear entire cart
    const clearCart = () => {
        setCart([])
    }

    // Calculate total items in cart
    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }

    // Calculate total price
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    // Check if product is in cart
    const isInCart = (productId) => {
        return cart.some(item => item.id === productId)
    }

    // Get quantity of specific product
    const getProductQuantity = (productId) => {
        const item = cart.find(item => item.id === productId)
        return item ? item.quantity : 0
    }

    const cartContextValue = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        isInCart,
        getProductQuantity
    }
    
    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    )
}

// Custom hook to use cart context
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export default CartProvider
