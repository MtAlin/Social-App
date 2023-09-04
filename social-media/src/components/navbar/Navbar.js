import "./NavBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useContext } from "react";
import { UserContext } from "../../context/layoutContext/LayoutContext";
import DropMenu from "../dropMenu/DropMenu";
function Navbar() {
  const user = useContext(UserContext);

  return (
    <div className="navbar">
      <div className="left">
        <span>Social App</span>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <MarkunreadOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <DropMenu user={user} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
