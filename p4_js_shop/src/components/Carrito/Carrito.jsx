import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Carrito.css";

const Carrito = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container-carrito">
        <h1 className="main-title-carrito">Carrito</h1>

        {
            carrito.map((producto) => {
                return (
                    <div key={producto.id} className="producto-carrito">
                        <h3 className="h3-producto-carrito">{producto.titulo}</h3>
                        <p className="precio-producto-carrito">Precio unitario: ${producto.precio}</p>
                        <p className="precio-producto-carrito">Precio total: ${producto.precio * producto.cantidad}</p>
                        <p className="cant-producto-carrito">Cantidad: {producto.cantidad}</p>
                    </div>
                )
            })
        }

        {
            carrito.length > 0 ?
            <>
                <h2>Precio Total: ${precioTotal()}</h2>
                <button className="vaciar-carrito" onClick={handleVaciar}>Vaciar</button>
            </> :
            <h2>No hay productos en el carrito</h2>
        }
    </div>
  )
}

export default Carrito