import "./Post.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SmsIcon from "@mui/icons-material/Sms";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import Comments from "../comments/Comments";
import { Link } from "react-router-dom";
import useStore from "../../state/stateZustand";

function Post({ post }) {
  const [commentOpen, setCommentOpen] = useState(false);
  const { addComments, getComments } = useStore();
  const { comments, isLoading } = useStore();

  return (
    <div className="post">
      <div className="container">
        <div className="userInfo">
          <Link to={`/profile/${post.user_id}`}>
            <div className="details">
              <img src={post.profilePic} alt="" />
              <div>
                <h4>{post.name}</h4>
                <span>a few second ago</span>
              </div>
            </div>
          </Link>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="userIcons">
          <div className="icon">
            <FavoriteBorderIcon />
            <span>1 Likes</span>
          </div>
          <div className="icon" onClick={() => setCommentOpen(!commentOpen)}>
            <SmsIcon />
            <span> 2 Comments</span>
          </div>
          <div className="icon">
            <ShareIcon />
            <span>Share</span>
          </div>
        </div>
        {commentOpen && (
          <Comments
            post_id={post.id}
            addComments={addComments}
            comments={comments}
            getComments={getComments}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
}

export default Post;
