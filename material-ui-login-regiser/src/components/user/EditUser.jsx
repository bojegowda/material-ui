import React, { Component } from "react";
import ApiService from "../service/ApiService";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      userId: window.localStorage.getItem("userId"),
      email: "",
      phone: "",
    };
    this.saveUser = this.saveUser.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    let id = this.state.userId;
    console.log(id);

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          name: json.name,
          username: json.username,
          email: json.email,
          phone: json.phone,
        })
      );
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveUser = (e) => {
    e.preventDefault();
    let user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
    };
    let id = this.state.userId;

    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
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
    this.setState({ message: "User updated successfully." });

    this.props.history.push("/users");
  };

  render() {
    return (
      <div>
        <Typography variant="h4" style={style}>
          Edit User
        </Typography>
        <form>
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
            margin="email"
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

const style = {
  display: "flex",
  justifyContent: "center",
};

export default EditUser;
