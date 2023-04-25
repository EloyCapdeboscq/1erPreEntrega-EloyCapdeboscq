import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mFetch"

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [isLoading, setIsLoading] = useState(true)
    const {pid} = useParams()
    
    useEffect(() => {
        mFetch(pid)
        .then(resp => setProducto(resp))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }, [])

    return (
    <div>
      {isLoading ?
        <h2>Cargando...</h2>
      :
        <ItemDetail producto = {producto}
        />
      }

    </div>
  )
}
