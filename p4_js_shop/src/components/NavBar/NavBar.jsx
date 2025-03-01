import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logostore from "../../img/store.png";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logostore} alt="Logo de la tienda" className="logo" />
            </Link>
            <ul className="menu">
                <li><Link to="/" className="menu-link">Inicio</Link></li>
                <li><Link to="/productos" className="menu-link">Productos</Link></li>
                <li><Link to="/productos/medias" className="menu-link">Medias</Link></li>
                <li><Link to="/productos/pantalones" className="menu-link">Pantalaones</Link></li>
                <li><Link to="/productos/remeras" className="menu-link">Remeras</Link></li>
                <li><Link to="/productos/buzos" className="menu-link">Buzos</Link></li>
                <li><Link to="/nosotros" className="menu-link">Nosotros</Link></li>
                <li><Link to="/contacto" className="menu-link">Contacto</Link></li>                
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
};

export default NavBar;