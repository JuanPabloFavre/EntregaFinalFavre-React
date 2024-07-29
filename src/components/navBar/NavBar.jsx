import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';
import Logo from '../logo/Logo';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid navbar border-bottom border-body p-3" data-bs-theme="dark">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <div className="navbar-brand">

                        <Logo />

                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Todos</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/category/Camisetas" className="dropdown-item">Camisetas</Link></li>
                                <li><Link to="/category/Shorts" className="dropdown-item">Shorts</Link></li>
                                <li><Link to="/category/Medias" className="dropdown-item">Medias</Link></li>
                                <li><Link to="/category/Zapatos" className="dropdown-item">Zapatos</Link></li>
                                <li><Link to="/category/Otros" className="dropdown-item">Otros</Link></li>
                            </ul>
                        </li>
                    </ul>



                    <div className="ml-3"> {/* Agregamos el margen izquierdo al contenedor del CartWidget */}

                        <CartWidget />

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
