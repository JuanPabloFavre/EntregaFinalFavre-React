import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addCart = (product) => {
        let existe = isInCart(product.id)
        if (existe) {
            let newArr = cart.map((element) => {
                if (element.id === product.id) {
                    return { ...element, quantity: product.quantity }
                } else {
                    return element
                }
            })
            setCart(newArr)
        } else {
            setCart([...cart, product])
        }
    }

    const clearCart = () => {
        setCart([])
    }


    const isInCart = (id) => {
        let element = cart.some((product) => product.id === id)
        return element
    }

    const deleteProduct = (id) => {
        let newArray = cart.filter((prod) => prod.id !== id)
        setCart(newArray)
    }


    const getQuantity = (id) => {

        let prodSearch = cart.find(product => product.id === id)

        if (prodSearch !== undefined) {
            return prodSearch.quantity
        } else {
            return 1
        }


    }

    const getTotalPrice = () => {
        let total = cart.reduce((acumulador, elemento) => {
            return acumulador + elemento.price * elemento.quantity
        }, 0)
        return total


    }

    const getTotalItems = () => {
        let total = cart.reduce((acumulador, elemento) => {
            return acumulador + elemento.quantity
        }, 0)
        return total
    }

    let data = { cart, addCart, clearCart, deleteProduct, getQuantity, getTotalPrice, getTotalItems }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>



}

export default CartContextProvider