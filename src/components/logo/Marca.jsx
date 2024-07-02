import React from 'react'
import Logo from '../../assets/logo.png'
import './Marca.css'
import { Link } from 'react-router-dom'

const Marca = () => {
    return (
        <div >

            <Link to={"/"} >

                <img src={Logo} alt="logo" className='logo-empresa' />

            </Link>

        </div>
    )
}

export default Marca