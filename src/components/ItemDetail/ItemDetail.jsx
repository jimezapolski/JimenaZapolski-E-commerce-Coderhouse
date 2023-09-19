import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const {addProduct, cartList} = useCartContext()

  const onAdd = (quantity) => {
    // console.log("productos seleccionados: ", count);
    addProduct(...product,quantity)
  };
  console.log(cartList);
  return (
    <>
    
      <Card className="bg-dark text-center text-white" key={product.id}>
      <h2>Detalle del producto</h2>
        <Card.Img variant="top"  src={product.imageUrl} alt="imagen prenda" />
        
        <Card.Body>
          <Card.Title> {product.name}</Card.Title>
          <Card.Text> {product.description} </Card.Text>
          <Card.Text> ${product.price} </Card.Text>
          <ItemCount
            stockInicial={product.stock}
            initial={1}
            onAdd={onAdd}
          ></ItemCount>
        </Card.Body>
        
      </Card>
    </>
  );
};

export default ItemDetail;
