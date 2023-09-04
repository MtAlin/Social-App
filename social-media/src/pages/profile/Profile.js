import { useParams } from "react-router-dom";
import "./Profile.scss";
import useStore from "../../state/stateZustand";
import { useEffect } from "react";
import Post from "../../components/post/Post";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";

function Profile() {
  const { id } = useParams();
  const { posts, getPosts, getUser, userProfile } = useStore();

  useEffect(() => {
    getPosts(id);
    getUser(id);
  }, []);

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://www.svcover.nl/images/ogimage.jpg"
          alt=""
          className="cover"
        />
        <div className="userAvatar">
          <span>a</span>
        </div>
      </div>
      <div className="profileContainer">
        <div className="left">
          <div className="item">
            <FacebookIcon fontSize="large" />
          </div>
          <div className="item">
            <InstagramIcon fontSize="large" />
          </div>
          <div className="item">
            <TwitterIcon fontSize="large" />
          </div>
          <div className="item">
            <LinkedInIcon fontSize="large" />
          </div>
          <div className="item">
            <PinterestIcon fontSize="large" />
          </div>
        </div>
        <div className="center">
          <h2>{userProfile.name}</h2>
          <div className="location">
            <span>
              <LocationOnIcon fontSize="large" /> USA
            </span>
            <span>
              <LanguageIcon fontSize="large" /> lama.dev
            </span>
          </div>
          <button>Follow</button>
        </div>
        <div className="right">
          <EmailIcon fontSize="large" />
          <MoreVertIcon fontSize="large" />
        </div>
      </div>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
}

export default Profile;
