import CartWidget from '../cartWidget/CartWidget'
import Logo from '../logo/Marca'
import './NavBar.css'
import { Link, Outlet } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'




const NavBar = () => {
    return (
        <div className='sticky-top'>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid navbar border-bottom border-body p-3" data-bs-theme="dark">



                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <Link to="/"><Logo /></Link>



                        <ul className="navbar-nav me-auto mb-20 m-10 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Todos  - </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" >Novedades  - </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" >Ofertas  - </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <Link to="/category/Fútbol" className="dropdown-item">Camisetas</Link>
                                    <Link to="/category/Short" className="dropdown-item">Shorts</Link>
                                    <Link to="/category/Medias" className="dropdown-item">Medias</Link>
                                    <Link to="/category/Zapato" className="dropdown-item">Zapatos</Link>
                                    <Link to="/category/Otros" className="dropdown-item">Otros</Link>
                                </ul>
                            </li>


                        </ul>

                        <form className="d-flex " role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar.." aria-label="Search"></input>
                            <button className="btn btn-success btn-lg" type="submit">Buscar</button>
                        </form>


                        <Link to={Cart}><CartWidget /></Link>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>

    )

}

export default NavBar