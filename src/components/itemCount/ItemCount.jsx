import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { Box } from "@mui/material";

const ItemCount = ({initial, stock, onAdd}) => {

  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
      >
        <Button onClick={decrement}>
          <RemoveIcon />
        </Button>
        <Button>{quantity}</Button>
        <Button onClick={increment}>
          <AddIcon />
        </Button>
      </ButtonGroup>
      <Button variant="contained" onClick={()=>onAdd(quantity)} disabled={!stock} >Agregar al carrito</Button>
    </Box>
  );
};

export default ItemCount;
