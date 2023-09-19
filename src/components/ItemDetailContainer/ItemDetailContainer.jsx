import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore} from 'firebase/firestore'
// import { mFetch } from "../../utils/mockFetch"

import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    // api manejo de estados 
    const [product, setProduct ] = useState({})
    const { pid } = useParams()
    console.log(pid)

//para traer 1 producto
    useEffect(() => {
        const db = getFirestore()
        //hago una consulta para traer un documento
        const queryDoc = doc(db, 'products', pid) // id useParams
        getDoc(queryDoc) //
        .then(resp => ( { id:resp.id, ...resp.data()})) // armo el objeto y meto al id para traerlo con los 
        .then(resp => setProduct(resp))
    }, [pid])

//antes
    // useEffect(()=>{
    //         mFetch(Number(pid))
    //         .then(resp => setProduct(resp))
    //         .catch(err=> console.log(err))    
             
    // },[pid])
    
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