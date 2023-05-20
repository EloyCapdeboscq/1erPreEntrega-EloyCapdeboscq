import { useCartContext } from "../../Context/CartContext"

export const CartWidget = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <div>
      {cantidadTotal() !== 0 && cantidadTotal()}🛒
    </div>
  )
}
