import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import logocart from "../../img/shopping-cart.png";

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext); 

  return (
    <div>
        <Link className="menu-link" to="/carrito">
            <img src={logocart} alt="Logo del carrito" className="logo-carrito" />
            <span className='numerito'>{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
};

export default CartWidget;