import { useState } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({producto}) => {
  const [isCant, setIsCant] = useState(false)

  const onAdd = (cantidad) => {
    console.log('cantidad seleccionada: ', cantidad)
    setIsCant(true)
  }
  return (
    <>
    <div className="row">
        <div className="col">
            <img src={producto.foto} className="w-50" alt="imagen" />
            <h3>Nombre: {producto.name}</h3>
            <h3>Categoria: {producto.categoria}</h3>
            <h3>Precio: {producto.precio}</h3>
            <h3>Stock: {producto.stock}</h3>
        </div>
        <div>
            {
                  !isCant ?
                      <ItemCount onAdd={onAdd} />
                  :
                    <>
                      <Link to ={'/cart'} className="btn btn-outline-danger">Terminar compra</Link>
                      <Link to = {'/'} className="btn btn-outline-success">Seguir la compra</Link>
                    </>
            }
        </div>
    </div>
    </>
  )
}
