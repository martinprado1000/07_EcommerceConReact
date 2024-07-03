import React from "react";
import ItemCount from "../itemCount/ItemCount";
import { getProducts } from "../../products";
import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

function ItemListContainer({ value }) {
  const [products, setProducts] = useState([""]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false)
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [products]);

  return (
    <>
      <Container>
        <h3 sx={{ textItem: "center" }}>{value}</h3>

        { loading ? <CircularProgress /> : <ItemList products={products} />}

      <ItemCount
        initial={1}
        stock={10}
        onAdd={(quantity) => {
          console.log(`Cantidad agregada:  ${quantity}`);
        }}
      />
      
      </Container>

    </>
  );
}

export default ItemListContainer;
