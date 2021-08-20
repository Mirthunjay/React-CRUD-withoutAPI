import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/page/Home";
import Users from "./components/page/Users";
import { userDetails } from "./userDetails";
import { Profiles } from "./components/page/Profiles";
import Adduser from "./components/page/Adduser";
import Editusers from "./components/page/Editusers";

export const context = createContext(null);

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

function Routing() {
  const [user, setUser] = useState(userDetails);
  const [username, setName] = useState("");
  const [image, setImage] = useState("");

  const value = { user, setUser, username, setName, image, setImage };
  return (
    <Router>
      <context.Provider value={value}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/profile/:id" exact component={Profiles} />
          <Route path="/edit/:id" exact component={Editusers} />
          <Route path="/create" exact component={Adduser} />
        </Switch>
      </context.Provider>
    </Router>
  );
}

export default App;
