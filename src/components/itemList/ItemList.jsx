import React from "react";
import Item from "../item/Item";
import Grid from '@mui/material/Grid';

const ItemList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Item {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
