import "./Comments.scss";
import { useState } from "react";
import { useEffect } from "react";

import { useContext } from "react";
import { UserContext } from "../../context/layoutContext/LayoutContext";

function Comments({ post_id, getComments, addComments, comments, isLoading }) {
  const user = useContext(UserContext);
  const [message, setMessage] = useState({
    name: "",
    avatar: "",
    desc: "",
    post_id: "",
  });

  const handlePostComents = () => {
    addComments(message, post_id);
    setMessage({ desc: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getComments(post_id);
  }, [message.desc]);

  return (
    <div className="comments">
      <div className="write">
        <div className="userAvatar">
          <span>{user.avatar}</span>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="write a comment"
            value={message.desc}
            onChange={(e) => setMessage({ desc: e.target.value })}
          />
        </form>
        <button onClick={handlePostComents}>Send</button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        comments.map((com, index) => (
          <div className="comment" key={index}>
            <div className="userAvatarComments">
              <span>{com.avatar}</span>
            </div>
            <div className="info">
              <span>{com.name}</span>
              <p>{com.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        ))
      )}
    </div>
  );
}

export default Comments;
