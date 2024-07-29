import { useContext } from "react"
import { HiOutlineShoppingCart } from "react-icons/hi2"
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import "../cartWidget/CartWidget.css"


const CartWidget = () => {

    const { getTotalItems } = useContext(CartContext)

    let total = getTotalItems()

    return (
        <div className="d-flex">
            <div>
                <Link to="/cart"><HiOutlineShoppingCart className=' text-light fs-1' /></Link>
            </div>
            <div>
                <span className="item-count" >{total}</span>
            </div>

        </div>
    )
}

export default CartWidget