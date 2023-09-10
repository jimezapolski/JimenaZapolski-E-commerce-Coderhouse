import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { mFetch } from "../../utils/mockFetch"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = () => { 
    const [products, setProduct] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(()=>{
        mFetch()
        .then(respuesta => setProduct(respuesta))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])
    
    const onAdd = (count ) => {
        console.log('productos seleccionados: ', count);
       
      }
   
    return (
       
             <CardGroup className="bg-dark">
            { loading ? <h2>Loading ...</h2> : products.map(product =>  
                                                    <Card  className="bg-dark text-center text-white"  key={product.id}>
                                                                               <Card.Img variant="top" src={product.imageUrl} alt="imagen prenda"/>
                                                                                <Card.Body >
                                                                                <Card.Title> {product.name}</Card.Title>
                                                                                <Card.Text> {product.description} </Card.Text> 
                                                                                <Card.Text> ${product.price} </Card.Text> 
                                                                                <ItemCount stockInicial={product.stock} initial={1} onAdd={onAdd}></ItemCount>
                                                                                </Card.Body>
                                                                                <Link 
 className="btn btn-outline-light"
 role="button"
 to={`/detalle/${product.id}`}
> 
 Ver Detalle
</Link>
                                                                               
                                                                                </Card> 
            )}
            </CardGroup>
      

    )
}

export default ItemListContainer