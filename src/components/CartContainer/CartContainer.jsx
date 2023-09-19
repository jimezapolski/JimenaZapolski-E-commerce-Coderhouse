
import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
  
    //const {} = useContext(CartContext) - para evitar que importe doble cosas
    const {cartList, deleteCart} = useCartContext()
    console.log(cartList)

    return (
    <div>
        {cartList.map(prod => <div key={prod.id}>
            <image src={prod.imageUrl} className="w-25" />
            {prod.name} - ${prod.price} - Cantidad{prod.quantity}
            <button> X </button>
        </div>)}
        <button onClick={deleteCart}>Vaciar carrito</button>
    </div>
  )
}

export default CartContainer