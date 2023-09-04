import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./DropMenu.scss";
import { useNavigate } from "react-router-dom";

export default function BasicMenu({ user }) {
  const [anchorEl, setAnchorEl] = React.useState();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");
    }
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="userAvatar">
          <span>{user.avatar}</span>
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={(() => handleClose, handleLogout)}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
