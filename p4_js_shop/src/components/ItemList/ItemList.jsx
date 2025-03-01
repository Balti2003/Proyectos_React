import Item from "./Item";
import { hacerMayus } from "../../helpers/hacerMayus";

const ItemList = ({ productos, titulo }) => {
    return (
        <div className="container">
            <h2 className="main-title">{hacerMayus(titulo)}</h2>

            <div className="productos">
                { productos.map((product) => <Item producto={product} key={product.id}/>) }
            </div>
        </div>
    )
};

export default ItemList;