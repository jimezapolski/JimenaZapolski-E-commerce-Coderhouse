import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const ItemCount = ({stockInicial, initial, onAdd}) => {
  const [count, setCount] = useState(initial); 

  const handleAdd = () => {
    if(stockInicial > count){
        setCount(count + 1);
    }
    else{
        console.log('no hay mas stock')
       
    }
   
  };
  const  handleSubstract = () => {
    if(count > 0){
        setCount(count - 1);
    }
    else{
        setCount(0)
    }
  };



  return (
    <ButtonGroup size="sm">
      <Button variant="outline-light" onClick={ handleSubstract}> - </Button>
      <label className="p-2 ms-auto">
        <strong className="text-white">{count}</strong>
      </label>
      <Button variant="outline-light" onClick={handleAdd}> + </Button>
      <Button variant="outline-light" onClick={() =>onAdd(count)}> add to cart </Button>
      </ButtonGroup>
  );
};

export default ItemCount;
