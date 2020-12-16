import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FaUserCircle } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import "./style-menu-user.css";

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
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FaUserCircle size={30} color="#ffffff" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <FaPen size={15} color="#000000" />&nbsp; Editar Perfil
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FaSignOutAlt size={15} color="#000000" />&nbsp; Sair
        </MenuItem>
      </Menu>
    </div>
  );
}
