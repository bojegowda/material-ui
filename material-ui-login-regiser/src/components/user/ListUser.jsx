import React, { Component } from "react";
import ApiService from "../service/ApiService";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
// import { json } from "sequelize/types";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      message: null,
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.reloadUserList = this.reloadUserList.bind(this);
  }

  componentDidMount() {
    this.reloadUserList();
  }

  reloadUserList() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ users: json }));
  }

  deleteUser(userId) {
    fetch("https://jsonplaceholder.typicode.com/posts/userId", {
      method: "DELETE",
    });
  }

  editUser(id) {
    window.localStorage.setItem("userId", id);
    this.props.history.push("/edit-user");
  }

  addUser() {
    window.localStorage.removeItem("userId");
    this.props.history.push("/add-user");
  }

  render() {
    return (
      <div>
        <Typography variant="h4" style={style}>
          User Details
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.addUser()}
        >
          Add User
        </Button>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.username}</TableCell>

                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right" onClick={() => this.editUser(row.id)}>
                  <CreateIcon />
                </TableCell>
                <TableCell
                  align="right"
                  onClick={() => this.deleteUser(row.id)}
                >
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const style = {
  display: "flex",
  justifyContent: "center",
};

export default ListUser;
