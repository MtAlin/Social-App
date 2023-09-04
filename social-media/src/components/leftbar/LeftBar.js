import "./LeftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import MarketPlace from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorial from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fundraiser from "../../assets/13.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/layoutContext/LayoutContext";
function Leftbar() {
  const user = useContext(UserContext);

  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");
    }
    navigate("/login", { replace: true });
  };

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <div className="userAvatar">
              <span>{user.avatar}</span>
            </div>
            <span>{user.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={MarketPlace} alt="" />
            <span>MarketPlace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Thoughts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos </span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span> Messages </span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorial} alt="" />
            <span>Tutorial </span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
