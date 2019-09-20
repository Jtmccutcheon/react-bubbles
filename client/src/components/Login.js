import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'


const Login = props => {
  console.log(props)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    console.log(e)
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    console.log(setCredentials)
  };

  const login = e => {
    console.log(e, "login clicked");
    e.persist();
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        // console.log(res)
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblespage");
      })

      .catch(err => console.log(err, "error on login"));
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={login}>
        {/* onsubmit={login}*/}
        <label>username: </label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />{" "}
        <br />
        <label> password: </label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />{" "}
        <br />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
