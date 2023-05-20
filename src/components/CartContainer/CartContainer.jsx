import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../Context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartProd } from "../CartProd/CartProd"
import "./CartContainer.css"

export const CartContainer = () => {
  const [id, setId] = useState('')
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const {cartList, vaciarCarrito, precioTotal } = useCartContext()

  const generarOrden = (evt) =>{
    evt.preventDefault()

    const order = {}
    order.buyer = dataForm
    order.items = cartList.map(({name, id, price, cantidad}) => ({id, name, price, cantidad}))
    order.total = precioTotal();
    
    const dbFirestore = getFirestore();
    const ordersCollection = collection(dbFirestore, 'orders')

    addDoc(ordersCollection, order)
    .then ( resp => setId(resp.id)) 
    .catch(err=> console.lo(err))
    .finally(() => {
      setDataForm({
        name: '',
        phone: '',
        email: ''
      })
      setTimeout(()=>{
        vaciarCarrito()
        setId('')
      }, 5000)
    })
  }

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    })
  }


  return (
    <div className="cart" >
      {id.length !== 0 && <h3> El ID de la compra es: {id} </h3>}
      {cartList.length !== 0 ?
        <>
        <CartProd/>
        <h3>Precio total de la compra: ${precioTotal()} </h3>
        <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button>
        <form className="form" onSubmit={generarOrden}>
          <input className="btnForm" type="text" name="name" onChange={handleOnChange} value={dataForm.name} placeholder="Ingrese el nombre"/>
          <input className="btnForm" type="text" name="phone" onChange={handleOnChange} value={dataForm.phone} placeholder="Ingrese el telefono"/>
          <input className="btnForm" type="text" name="email" onChange={handleOnChange} value={dataForm.email} placeholder="Ingrese el email"/>
          <button className="btn btn-outline-danger">Generar Orden</button>
        </form>
        </>
        :
          <div>
            <h2>No hay productos en el carrito</h2>
            <Link to='/'>Anda a comprar algo!</Link>
          </div>
      }
    </div>
  )
}
