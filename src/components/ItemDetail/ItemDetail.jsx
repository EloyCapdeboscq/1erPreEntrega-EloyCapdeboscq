import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import "./ItemDetail.css"

export const ItemDetail = ({producto}) => {
  const [isCant, setIsCant] = useState(false)
  const {addToCart} = useCartContext()
  const onAdd = (cantidad) => {
    addToCart( {...producto, cantidad} )
    setIsCant(true)
  }

  return (
    <>
    <div className="row">
        <div className="card">
            <img src={producto.image} className="w-25" alt="imagen" />
            <h3>Nombre: {producto.name}</h3>
            <h3>Categoria: {producto.categoria}</h3>
            <h3>Precio: ${producto.price}</h3>
            <h3>Stock: {producto.stock}</h3>
        </div>
        <div className="btns">
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
