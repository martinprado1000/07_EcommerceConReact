import React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget() {
  return (
    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
      <Badge badgeContent={0} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
