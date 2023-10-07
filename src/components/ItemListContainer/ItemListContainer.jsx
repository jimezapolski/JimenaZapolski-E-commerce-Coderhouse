import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {collection, getFirestore, getDocs, query, where} from 'firebase/firestore'
// import { mFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList";
import { CardGroup } from "react-bootstrap";

const Loading = ()=>{
   

    return (
        <>
            <h2>Loading ...</h2> 
        </>
    )
}

const ItemListContainer = () => { 
    const [products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true)
    // const [ meGusta, setMeGusta ] = useState(false)

    const {cid} = useParams()
  //  console.log(cid)
    
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
       
      
        if(cid) {
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
        else{
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            // const queryFilter = query(queryCollection, where('category', '==', cid))
            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
            
            //para filtrar
            // const queryFilter = query(queryCollection, 
            //     where('price', ' ==', '8000'),
            //     limit(1),
            //     orderBy('price', 'desc')
            //  )
    

        }
      
    }, [cid])
    console.log(products)
  
//     // función para agregar un nuevo producto
//    const handleAddProduct = () => {
//     setProducts([
//         ...products,
//         {id: products.length+1, name: 'Producto de prueba', price: 1500, description: 'lorem asdfas asdf asdf '}
//     ])
// }
//  // función para cambiar el estado de me gusta
//  const handleMeGusta = () => {
//     setMeGusta(!meGusta)
// }
console.log(products)
    return (
       
             <CardGroup className="bg-dark">
                   {/* <button className="btn btn-outline-dark" onClick={handleMeGusta}>ME gusta</button>
                  <button className="btn btn-outline-dark" onClick={handleAddProduct}>agregar product</button> */}
            { loading ? 
                    <Loading />
                : 
            <ItemList products={products} />
            }
            </CardGroup>
      

    )
}

export default ItemListContainer