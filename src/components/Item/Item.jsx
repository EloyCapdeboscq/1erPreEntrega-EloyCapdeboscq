import { Link } from "react-router-dom"

export const Item = ({id, foto, name, price, categoria}) => {
  return (
    <div key={id} className="card w-25">
        <img src={foto} alt="imagen-card" className="card-img-top"/>
        <div className="card-body">
            <h4>Nombre: {name}</h4>
            <label>Precio: {price}</label>
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

