import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => {
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
  });

  const token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return {
    storie: "",
    userProfile: {},
    comments: [],
    posts: [],
    isLoading: false,

    getPosts: async (id) => {
      set({ isLoading: true });

      try {
        const response = await api.get(`/posts/profile/${id}`);
        const data = response.data;
        set({ posts: data, isLoading: false });
      } catch (error) {
        console.error("Error fetching posts:", error.message);
        set({ isLoading: false });
        throw error; // Rethrow the error for handling in calling code
      }
    },

    addComments: async (message, post_id) => {
      console.log(token);
      const comments = { ...message, post_id };

      try {
        await api.post("/comments/create", comments);
      } catch (error) {
        console.error("Error posting comments:", error.message);
        throw error;
      }
    },

    getComments: async (post_id) => {
      set({ isLoading: true });
      try {
        const response = await api.get(`/comments/${post_id}`);
        const data = response.data;
        console.log(data);
        set({ comments: data, isLoading: false });
      } catch (error) {
        console.error("Error fetching comments:", error.message);
        throw error;
      }
    },
    getUser: async (id) => {
      try {
        const response = await api.get(`/auth/users/${id}`);
        const data = response.data;
        console.log(data);
        set({ userProfile: data });
      } catch (error) {
        console.error("Error fetching comments:", error.message);
        throw error;
      }
    },

    addStorie: async (uploadStorie) => {
      console.log(uploadStorie);
      try {
        const response = await api.post("/stories/upload", uploadStorie);
        set({ storie: response.data });
        console.log(response.data);
      } catch (error) {
        console.error("Error posting stories:", error.message);
        throw error;
      }
    },
  };
});
export default useStore;
