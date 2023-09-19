import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {collection, getFirestore, getDocs, query, where} from 'firebase/firestore'
// import { mFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList";
import { CardGroup } from "react-bootstrap";

const ItemListContainer = () => { 
    const [products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true)
    const {cid} = useParams()
    console.log(cid)
    
    // useEffect(()=>{
    //     if(cid) {
    //         mFetch()
    //         .then(respuesta => setProducts(respuesta.filter(product => cid === product.category)))
    //         .catch(err => console.log(err))
    //         .finally(()=> setLoading(false))
    //     } else {
    //         mFetch()
    //         .then(respuesta => setProducts(respuesta))
    //         .catch(err => console.log(err))
    //         .finally(()=> setLoading(false))
    //     }
       
    // }, [cid])

    //funcion que nos da firebase para traer un documento de firestore
    

    //FUNCION PARA TRAER TODOS
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
        
        //para filtrar
        // const queryFilter = query(queryCollection, 
        //     where('price', ' ==', '8000'),
        //     limit(1),
        //     orderBy('price', 'desc')
        //  )

    //    const queryFilter = query(queryCollection, where('category', '==', cid))
        getDocs(queryCollection)
       .then(resp => setProducts(resp.docs.map(prod=>({id:resp.id, ...prod.data()}))))
       .catch(err => console.log(err))
       .finally(()=> setLoading(false))
   
    }, [cid])
    console.log(products)
   
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