import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Typography";

const Item = ({ id, name, category, price, img, stock, description }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <Box sx={{ height: 200, overflow: "hidden" }}>
        <CardMedia
          sx={{ objectFit: "cover", width: "100%", height: "100%" }}
          component="img"
          alt={name}
          height="250"
          image={img}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detalle del producto</Button>
      </CardActions>
    </Card>
  );
};

export default Item;
