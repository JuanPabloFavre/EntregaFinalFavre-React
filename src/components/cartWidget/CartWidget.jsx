import { HiOutlineShoppingCart } from "react-icons/hi2"
import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <div >

            <Link to="/cart">   <HiOutlineShoppingCart className=' text-light m-4 fs-1' />  </Link>


        </div>
    )
}

export default CartWidget