import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebaseConfig'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Contact = () => {

    const [user, setUser] = useState({ nombre: "", email: "", telefono: "", direccion: "", documento: "", apellido: "", comentario: "" })
    const navigate = useNavigate()

    const enviarFormulario = (e) => {
        e.preventDefault()

        let contact = {
            buyer: user,

        }

        let contactCollection = collection(db, "contact")


        addDoc(contactCollection, contact).then((res) => { toast.success(`Gracias por su consulta.`) }).catch().finally(() => { navigate("/") })

    }

    const handleChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })

    }

    return (
        <>
            <div className='d-flex justify-content-center aling-items-center'>
                <h1 style={{ color: "black" }}>Ingrese su consulta y lo contactaremos</h1>
            </div>
            <div className='d-flex justify-content-center p-3' >
                <div className='d-flex justify-content-center ' style={{ width: "80%", height: "100vh" }} >


                    <div className='d-flex justify-content-center p-3'>

                        <div className='d-flex justify-content-center ' style={{ width: "80%", height: "80vh"}}>





                            <form onSubmit={enviarFormulario} className='col-auto '>

                                <div className="form-group ">

                                    <label className='m-3 fs-4 text '>Nombre</label>
                                    <input type="text"
                                        className="form-control border border-primary "
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
                                <div className="form-group">
                                    <label className='m-3 fs-5 text'>Comentario</label>

                                    <textarea className="form-control border border-primary"
                                        placeholder='Ingresa tu comentario'
                                        onChange={handleChange}
                                        name='comentario'
                                        required
                                        style={{ resize: 'none' }}
                                    ></textarea>
                                </div>

                                <div className="d-flex justify-content-between p-3">
                                    <button type="submit" className='btn btn-success m-5'>Enviar informacion</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div >
            </div>
        </>
    )



}
export default Contact