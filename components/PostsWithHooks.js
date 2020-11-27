// WithHooks.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsList from "./PostsList";

const POSTS_SERVICE_URL = "https://jsonplaceholder.typicode.com/posts";

function PostsWithHooks() {
  const [data, setData] = useState({ posts: [], isFetching: false });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setData({ ...data, isFetching: true });
        const response = await axios.get(POSTS_SERVICE_URL);
        setData({
          ...data,
          posts: response.data.slice(0, 5),
          isFetching: false
        });
      } catch (e) {
        console.log(e);
        setData({ ...data, isFetching: false });
      }
    };
    fetchUsers();
  }, []); // Runs once

  return <PostsList data={data.posts} isFetching={data.isFetching} />;
}

export default PostsWithHooks;
