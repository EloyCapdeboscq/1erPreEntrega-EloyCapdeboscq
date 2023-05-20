import React, { useState } from 'react'


export const CartForm = () => {
  
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
      })

    const handleOnChange = (evt) => {
        console.log('nombre del input', evt.target.name)
        console.log('valor del input', evt.target.value)
        setDataForm({
          ...dataForm,
          [evt.taget.name]: evt.target.value
        })
        }

  return (
    <form>
        <input type="text" name="name" onChange={handleOnChange} value={dataForm.name} placeholder="Ingrese el nombre"/>
        <input type="text" name="phone" onChange={handleOnChange} value={dataForm.phone} placeholder="Ingrese el telefono"/>
        <input type="text" name="email" onChange={handleOnChange} value={dataForm.email} placeholder="Ingrese el email"/>
        <button className="btn btn-outline-danger">Generar Orden</button>
    </form>
  )
}
