import "./Posts.scss";
import Post from "../post/Post";
import { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
