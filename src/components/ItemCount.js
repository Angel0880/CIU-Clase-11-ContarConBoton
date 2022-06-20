import React, { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  const addCount = () => {
    count !== stock && setCount(count + 1);
  };
  const substractCount = () => {
    count !== 0 && setCount(count - 1);
  };

  return (
    <div className="itemCountContainer">
      <ButtonToolbar>
        <ButtonGroup className="me-2" aria-label="First group">
          <Button variant = "danger" disabled={count === 0} onClick={substractCount}>
            -
          </Button>
          <div className="itemCountNumberContainer">
            <p className="itemCountNumber">{count}</p>
          </div>
          <Button variant = "success" disabled={count === stock} onClick={addCount}>
            +
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <Button variant= "outline-primary" disabled={count === 0} onClick={onAdd}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;