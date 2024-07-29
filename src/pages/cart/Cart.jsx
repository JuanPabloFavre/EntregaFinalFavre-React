import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

const Cart = () => {

    const { cart, clearCart, deleteProduct, getTotalPrice } = useContext(CartContext)
    let total = getTotalPrice()

    const handlClear = () => {
        Swal.fire({
            title: "¿Deseas vaciar el carrito?",
            showDenyButton: true,
            icon: "warning",
            confirmButtonText: "Si, quiero vaciarlo",
            confirmButtonColor: "#3085d6",
            denyButtonText: `No, cancelar`
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire({
                    position: "center-center",
                    icon: "info",
                    title: "Vaciado",
                    showConfirmButton: false,
                    timer: 1500
                });
                clearCart()
            } else if (result.isDenied) {

            }
        });
    }

    const handlDelete = (id) => {
        Swal.fire({
            title: "¿Deseas eliminar el producto?",
            showDenyButton: true,
            icon: "warning",
            confirmButtonText: "Si, quiero eliminarlo",
            confirmButtonColor: "#3085d6",
            denyButtonText: `No, cancelar`
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire({
                    position: "center-center",
                    icon: "info",
                    title: "Eliminado",
                    showConfirmButton: false,
                    timer: 1500
                });
                deleteProduct(id)
            } else if (result.isDenied) {

            }
        });


    }

    return (
        <div >
            <div className='d-flex justify-content-center align-self-center' style={cart.length > 0 ? { width: "100%", background: "white" } : { width: "100%", height: "60vh", background: "white" }}>

                <div className='p-2'>
                    <div>
                        {cart.map((elemento) => {
                            return (
                                <div key={elemento.id} className="card mb-2">
                                    <div className="row g-1">
                                        <div className="col-md-4">
                                            <img src={elemento.img} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="card-title">{elemento.title}</h4>
                                                <h5 className="card-text fw-bold ">Cantidad: {elemento.quantity}</h5>
                                                <h5 className='card-text fw-bold'>Precio unitario: ${elemento.price}</h5>


                                                <button className='btn btn-outline-danger' onClick={() => handlDelete(elemento.id)}>X</button>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            )
                        })}

                    </div>
                    <h5 className='card-text fw-bold'>Precio total: ${total}</h5>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <div>
                    <button disabled={cart.length > 0 ? false : true} className={cart.length > 0 ? 'btn btn-warning m-4' : 'm-4'} onClick={handlClear}>Limpiar el Carrito</button>
                </div>


                <Link to={"/Checkout"}>
                    <button disabled={cart.length > 0 ? false : true} className={cart.length > 0 ? 'btn btn-success m-4' : 'm-4'}>Finalizar Compra</button>
                </Link>
            </div>
        </div >
    )
}

export default Cart