import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mFetch"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
  const [productos, setProductos ] = useState([])
  const [IsLoading, setIsLoading] = useState(true)
  const {categoria} = useParams()

  useEffect(()=>{
    if (!categoria){
      mFetch()
      .then((resultado)=> {
      setProductos(resultado)
      })
      .catch(error => console.log(error))
      .finally(()=> setIsLoading(false))
    }else{
      mFetch()
      .then((resultado)=> {
      setProductos(resultado.filter(producto => producto.categoria===categoria))
      })
      .catch(error => console.log(error))
      .finally(()=> setIsLoading(false))
    }
  }, [categoria])

  return (
    IsLoading ?
              <h2>Cargando...</h2>
          :
              <ItemList productos={productos}/>
  )
}