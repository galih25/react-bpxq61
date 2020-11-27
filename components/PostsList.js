import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../Title";

const PostsList = props => {
  return (
    <React.Fragment>
      <Title>Posts List</Title>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id </TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(row => (
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
      <p>{props.isFetching ? "Fetching posts..." : ""}</p>
    </React.Fragment>
  );
};

export default PostsList;
