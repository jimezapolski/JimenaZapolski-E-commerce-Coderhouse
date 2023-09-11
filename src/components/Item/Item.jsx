import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({product}) => {
  return (
    <>
      <Card className="bg-dark text-center text-white" key={product.id}>
        <Card.Img variant="top" src={product.imageUrl} alt="imagen prenda" />
        <Card.Body>
          <Card.Title> {product.name}</Card.Title>
          <Card.Text> {product.description} </Card.Text>
          <Card.Text> ${product.price} </Card.Text>
        </Card.Body>
        <Link
          className="btn btn-outline-light"
          role="button"
          to={`/detalle/${product.id}`}
        >
          Ver Detalle
        </Link>
      </Card>
    </>
  );
};

export default Item;
