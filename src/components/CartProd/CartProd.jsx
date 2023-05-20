import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import "./CartProd.css"

export const CartProd = () => {

  const {cartList, eliminarProducto} = useCartContext()

  return (
    <>
     {cartList.map(prod => (
          <div className="prodC">
            <img className="w-75" src={prod.image} alt="imagen"/>
            <label>Precio : ${prod.price} - Cantidad : {prod.cantidad}</label>
            <button onClick={() => eliminarProducto(prod.id)}> X </button>
          </div>
        ))}
    </>
  )
}


// TERMINAR README, DEPLOY, UN POCO CSS Y VER LOS INPUT