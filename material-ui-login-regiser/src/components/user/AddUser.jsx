import React, { Component } from "react";
import ApiService from "../service/ApiService";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      phone: "",
    };
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser = (e) => {
    e.preventDefault();
    let user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        phone: this.state.phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    this.setState({ message: "User added successfully." });

    this.props.history.push("/users");

    // ApiService.addUser(user).then((res) => {
    //   this.setState({ message: "User added successfully." });
    //   this.props.history.push("/users");
    // });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <Typography variant="h4" style={style}>
          Add User
        </Typography>
        <form style={formContainer}>
          <TextField
            placeholder="First Name"
            fullWidth
            margin="normal"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />

          <TextField
            placeholder="Last name"
            fullWidth
            margin="normal"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />

          <TextField
            type="email"
            placeholder="email"
            fullWidth
            margin="normal"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />

          <TextField
            type="phone"
            placeholder="phone"
            fullWidth
            margin="normal"
            name="phone"
            value={this.state.phone}
            onChange={this.onChange}
          />

          <Button variant="contained" color="primary" onClick={this.saveUser}>
            Save
          </Button>
        </form>
      </div>
    );
  }
}
const formContainer = {
  display: "flex",
  flexFlow: "row wrap",
};

const style = {
  display: "flex",
  justifyContent: "center",
};

export default AddUser;
