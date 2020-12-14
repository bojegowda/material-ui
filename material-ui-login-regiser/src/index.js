import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

import Registration from "./components/Registration";
import Login from "./components/Login";

import ListUser from "./components/user/ListUser";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";

import "./styles.css";

const routes = (
  <BrowserRouter>
    <Route exact path="/" component={Registration} />
    <Route exact path="/Login" component={Login} />

    <Route path="/users" component={ListUser} />
    <Route path="/add-user" component={AddUser} />
    <Route path="/edit-user" component={EditUser} />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routes, rootElement);
