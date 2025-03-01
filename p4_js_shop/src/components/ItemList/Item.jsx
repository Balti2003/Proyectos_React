import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.titulo} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <Link to={`/item/${producto.id}`} className="ver-mas">Ver Más</Link>
        </div>
    </div>
  )
};

export default Item;