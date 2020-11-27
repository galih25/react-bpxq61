import React, { Component } from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// API END POINT
const POSTS_SERVICE_URL = 'https://jsonplaceholder.typicode.com/posts';

class PostsStandalone extends Component {
  state = {
    // Initial state.
    isFetching: false,
    posts: []
  };

  render() {
    return (
      <Paper>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id </TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.posts.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p>{this.state.isFetching ? 'Fetching posts...' : ''}</p>
      </Paper>
    );
  }

  componentDidMount() {
    this.fetchPosts();
  }

  async fetchPostsAsync() {
    try {
      this.setState({ ...this.state, isFetching: true }); // Sets loading state.
      const response = await axios.get(POSTS_SERVICE_URL);
      this.setState({
        ...this.state,
        isFetching: false,
        posts: response.data.slice(0, 5) // Take first 5 posts only
      });
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  }

  fetchPosts = this.fetchPostsAsync;
}

export default PostsStandalone;