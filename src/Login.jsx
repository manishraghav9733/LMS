import React, { useState, useEffect } from "react";
import { message, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../src/actions/authActions";
import history from "./history";
import crmApi from "../src/actions/index";
import "antd/dist/antd.css";

const Login = (props) => {
  const [isLoged, setIsLoged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //console.log(props.userAuth);

  useEffect(() => {
    {
    
    }
    localStorage.setItem("username1", "videsh");
    localStorage.setItem("password1", "1234");
    localStorage.setItem("username2", "test1");
    localStorage.setItem("password2", "12345");

    {
      /*LIST OF USERS */
    }
  }, []);

  const handleLogin = () => {
    if(
      email === "" ||
      email === " " ||
      email === null ||
      email === undefined 
  )if(
    password === "" ||
    password === " " ||
    password === null ||
    password === undefined 
) {
      props.loginUser(email, password);
      //document.location.assign("/home");
      history.push("/home");
      message.success("login sucessfully");
    } else {
      message.warning("please enter valid user");
      //props.logoutUser();
    }
    if (props.userAuth.isSignedIn) {
      history.push("/dashboard");
    }
  };

  const onUserNameChange = (e) => {
    //console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onPassChange = (e) => {
    //console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "2%" }}>
        <div
          style={{
            maxWidth: "420px",
            margin: "0px auto",
            padding: "30px",
            borderRadius: "5px",
            background: "#FAFAFA",
            boxShadow: "0 8px 6px -6px black",
            marginTop:"10%"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img src="https://www.ranoliaventures.com/images/logo.png" />
          </div>
          <div style={{ margin: "30px" }}>
            <label>Username</label>
            <Input
              onChange={onUserNameChange}
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="username "
            />
          </div>
          <div style={{ margin: "30px" }}>
            <label>Password</label>
            <Input
              onChange={onPassChange}
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              onClick={handleLogin}
              type="primary"
              className="login-form-button"
              style={{background:"#31b5ab",borderColor:"#31b5ab"}}
            >
              <Icon type="login" />
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { userAuth: state.userAuth };
};
export default connect(mapStateToProps, { loginUser, logoutUser })(Login);
