import { createContext  } from "react"
import { useState} from "react";

const CartContext = createContext([]);

export const useCartContext = () => {
    useCartContext(CartContext)
}

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
   
    const addProduct = (newProduct) => {
      //creo el array nuevo que me permite ir sumando a lo que ya tenia en cartList
      // con un if  detectar duplicados t que no sume
    // precio total
     //
      setCartList(
            ...cartList, 
            newProduct
        )
    }

    //eliminar producto
    //mostrar la cantidad de productos total que tienen
    // precio total
    
    const deleteCart = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value= {{
            cartList,
            addProduct,
            deleteCart
        }}>
            {children}
        </CartContext.Provider>


    )
}

export default CartContextProvider