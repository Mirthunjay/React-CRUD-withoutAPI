import React, { useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { context } from "../../App.js";
import { useHistory, useParams } from "react-router-dom";
import "./Editusers.css";

export default function Editusers() {
  var contextData = useContext(context);

  const history = useHistory();
  const { id } = useParams();
  const indexkey = id;
  const { user, setUser, username, setName, image, setImage } = contextData;

  const editUser = () => {
    if (username === "" || image === "") {
      alert("Please enter the value");
    } else {
      const userCopy = [...user];
      userCopy[indexkey - 1] = {
        id: +id,
        name: username,
        img: image,
        details: `Hi I Am ${username}, I want to be a Full Stack Developer`,
      };
      setUser(userCopy);
      setName("");
      setImage("");
      history.push("/users");
    }
  };

  useEffect(() => {
    setName(user[id - 1].name);
    setImage(user[id - 1].img);
  }, [setImage, setName, user, id]);

  return (
    <div className="edit-user">
      <p className="edit-user-heading">Update User </p>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={username}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <TextField
        id="outlined-basic"
        label="Image Link"
        variant="outlined"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        required
      />

      <Button variant="outlined" color="primary" onClick={editUser}>
        Update
      </Button>
    </div>
  );
}
