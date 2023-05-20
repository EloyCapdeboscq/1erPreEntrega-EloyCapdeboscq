import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { Loading } from "../Loading/Loading"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

export const ItemListContainer = () => {
  const [productos, setProductos ] = useState([])
  const [IsLoading, setIsLoading] = useState(true)
  const {categoria} = useParams()

  useEffect(()=>{
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'productos')
    const queryCollectionFiltered = !categoria ? queryCollection : query(queryCollection, where ('categoria', '==', categoria) )

    getDocs(queryCollectionFiltered)
      .then(res => setProductos (res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
      .catch(error => console.log(error))
      .finally(()=> setIsLoading(false))
  }, [categoria]) 

  return (
    IsLoading ?

    <Loading/>
    
    :
    
    <ItemList productos={productos}/>
   
  )
}