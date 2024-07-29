import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebaseConfig'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'


const Checkout = () => {

    const [user, setUser] = useState({ nombre: "", email: "", telefono: "", direccion: "", documento: "", apellido: "" })
    const { cart, getTotalPrice, clearCart } = useContext(CartContext)
    const [refOrders, setRefOrders] = useState("")
    const navigate = useNavigate()



    let total = getTotalPrice()


    const enviarFormulario = (e) => {
        e.preventDefault()

        let order = {
            buyer: user,
            items: cart,
            total: total,
        }

        let ordersCollection = collection(db, "orders")
        let productCollection = collection(db, "products")
        cart.forEach((elemento) => {
            let refDoc = doc(productCollection, elemento.id)
            updateDoc(refDoc, { stock: elemento.stock - elemento.quantity })

        })
        addDoc(ordersCollection, order).then((res) => { setRefOrders(res.id), toast.success(`Gracias por tu compra. Ticket Nro: ${res.id}`) }).catch().finally(() => { clearCart(); navigate("/") })

    }




    const handleChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })

    }


    return (
        <>
            <div className='d-flex justify-content-center aling-items-center'>
                <h1 style={{ color: "black" }}>Ingresar Datos</h1>
            </div>

            <div className='d-flex justify-content-center p-3'>

                <div className='d-flex justify-content-center ' style={{ width: "80%", height: "80vh", background: "white" }}>

                    {refOrders ?

                        <div className='d-flex justify-content-center aling-items-center m-2 p-4'>

                        </div>
                        :
                        <form onSubmit={enviarFormulario} className='p-4 m-2 col-auto '>
                            <div className="form-group ">

                                <label className='m-3 fs-5 text '>Nombre</label>
                                <input type="text"
                                    className="form-control border border-primary"
                                    placeholder='Ingresa tu nombre'
                                    onChange={handleChange}
                                    name='nombre'
                                    required

                                />
                            </div>

                            <div className="form-group">
                                <label className='m-3 fs-5 text'>Apellido</label>
                                <input type="text"
                                    className="form-control border border-primary"
                                    placeholder='Ingresa tu Apellido'
                                    onChange={handleChange}
                                    name='apellido'
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className='m-3 fs-5 text'>Documento</label>
                                <input type="number"
                                    className="form-control border border-primary"
                                    placeholder='Ingresa tu Documento'
                                    onChange={handleChange}
                                    name='documento'
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className='m-3 fs-5 text'>Telefono</label>
                                <input type="tel"
                                    className="form-control border border-primary"
                                    placeholder='Ingresa tu Telefono'
                                    onChange={handleChange}
                                    name='telefono'
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className='m-3 fs-5 text'>Direccion</label>
                                <input type="text"
                                    className="form-control border border-primary"
                                    placeholder='Ingresa tu direccion'
                                    onChange={handleChange}
                                    name='direccion'
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className='m-3 fs-5 text'>Correo Electrónico</label>
                                <input type="email"
                                    className="form-control border border-primary"
                                    placeholder='Ingresa tu Correo'
                                    onChange={handleChange}
                                    name='email'
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-between p-3">
                                <button type="submit" className='btn btn-success m-2'>Confirmar Compra</button>
                                <button type="button" className='btn btn-danger m-2' onClick={() => {
                                    toast.success('Compra cancelada.');
                                    clearCart();
                                    navigate('/');
                                }}>Cancear Compra</button>
                            </div>
                        </form>
                    }
                </div>
            </div >

        </>
    )

}

export default Checkout