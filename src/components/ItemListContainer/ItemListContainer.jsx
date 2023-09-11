import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { mFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList";
import { CardGroup } from "react-bootstrap";

const ItemListContainer = () => { 
    const [products, setProduct] = useState([])
    const [ loading, setLoading ] = useState(true)
    const {cid} = useParams()
    console.log(cid)
    
    useEffect(()=>{
        if(cid) {
            mFetch()
            .then(respuesta => setProduct(respuesta.filter(product => cid === product.category)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            mFetch()
            .then(respuesta => setProduct(respuesta))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
       
    }, [cid])
    return (
       
             <CardGroup className="bg-dark">
            { loading ? 
                <h2>Loading ...</h2> 
                : 
            <ItemList products={products} />
            }
            </CardGroup>
      

    )
}

export default ItemListContainer