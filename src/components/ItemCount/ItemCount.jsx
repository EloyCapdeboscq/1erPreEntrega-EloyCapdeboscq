import { useCounter } from '../../hook/useCounter'

export const ItemCount = ({initial = 1, stock = 5, onAdd}) => {

  const {counter, handleSumar, handleRestar} = useCounter(initial, 1, stock)
  
  return (
    <div>
      <p> {counter}</p>
      <button onClick={handleSumar}> + 1 </button>      
      <button onClick={handleRestar}> - 1 </button>
      <button onClick={()=>{onAdd(counter)}}>Agregar al Carrito</button>
    </div>
  )
}
