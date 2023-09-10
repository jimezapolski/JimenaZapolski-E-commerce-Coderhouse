import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({product}) => {
  const onAdd = (count ) => {
    console.log('productos seleccionados: ', count);
  }

  return (
    <Card  className="bg-dark text-center text-white"  key={product.id}>
    <Card.Img variant="top" src={product.imageUrl} alt="imagen prenda"/>
     <Card.Body >
     <Card.Title> {product.name}</Card.Title>
     <Card.Text> {product.description} </Card.Text> 
     <Card.Text> ${product.price} </Card.Text> 
     <ItemCount stockInicial={product.stock} initial={1} onAdd={onAdd}></ItemCount>
     </Card.Body>
     <Link 
 className="btn btn-outline-light btn-lg"
 role="button"
 to={`/detalle/${product.id}`}
> 
 Ver Detalle
</Link>
    
    

 
    
     </Card> 
  )
}

export default ItemDetail