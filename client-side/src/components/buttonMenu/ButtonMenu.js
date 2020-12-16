import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FaRegStar } from "react-icons/fa";
import "./style-menu.css";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="btn-options opitions-favorite"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Favoritos &nbsp;&nbsp; <FaRegStar size={20} color="#ffffff" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Heróis</MenuItem>
        <MenuItem onClick={handleClose}>Quadrinhos</MenuItem>
      </Menu>
    </div>
  );
}
