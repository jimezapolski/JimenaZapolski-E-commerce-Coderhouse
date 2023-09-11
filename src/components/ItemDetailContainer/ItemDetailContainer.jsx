import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { mFetch } from "../../utils/mockFetch"

import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    // api manejo de estados 
    const [product, setProduct ] = useState({})
    const { pid } = useParams()
    console.log(pid)

    useEffect(()=>{
            mFetch(Number(pid))
            .then(resp => setProduct(resp))
            .catch(err=> console.log(err))    
             
    },[pid])
    return (
        <div>
            {
                // product.length > 0 && product.map(producto => {return (<ItemDetail key={producto.id} product={producto} />)})
                <ItemDetail key={product.id} product={product} />
           }
           
        </div>
    )
}

export default ItemDetailContainer