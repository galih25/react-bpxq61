import React, { Component } from "react";
import PostsList from "./PostsList";

import axios from "axios";

const POSTS_SERVICE_URL = "https://jsonplaceholder.typicode.com/posts";

class PostsHOC extends Component {
  state = {
    isFetching: false,
    posts: []
  };

  render = () => (
    <PostsList data={this.state.posts} isFetching={this.state.isFetching} />
  );

  componentDidMount() {
    // console.log("component did mount");
    this.fetchPosts();
  }

  async fetchPostsAsync() {
    try {
      this.setState({ ...this.state, isFetching: true });
      const response = await axios.get(POSTS_SERVICE_URL);
      // console.log(response);
      this.setState({
        ...this.state,
        isFetching: false,
        posts: response.data.slice(0, 5)
      }); // Take first 5 posts only
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  }

  fetchPosts = this.fetchPostsAsync;
}

export default PostsHOC;
