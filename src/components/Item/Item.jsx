import { Link } from "react-router-dom"
import "./Item.css"

export const Item = ({id, image, name, price, categoria}) => {

  return (
        <div key={id} className="card">
            <img src={image} alt="imagen-card" className="card-img-top"/>
            <div className="card-body">
                <h4>Nombre: {name}</h4>
                <label>Precio: ${price}</label>
                <label>Categoria: {categoria}</label>
            </div>
            <div className="card-footer">
                <Link to = {`/detail/${id}`}>
                    <button className="btn btn-outline-dark">Detalle</button>
                </Link>
            </div>
        </div>
    )
}