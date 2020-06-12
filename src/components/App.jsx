import React, { useEffect } from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login";
import Menu from "./Menu";
import { loginUser } from "../actions/authActions";
import history from "../history";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, user, dispatch, ...rest }) => {
  {
    /*if (user.isSignedIn === true) {
    document.location.assign("/home");
  } */
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        user.isSignedIn === true ? (
          <menuIndex>
            <Component {...props} />
          </menuIndex>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const App = props => {
  const dispatch = useDispatch();
  //const user = useSelector(state => state.userAuth);
  const user = props.userAuth;

  console.log(props.userAuth.isSignedIn);
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute
          path="/home"
          exact
          component={Menu}
          user={user}
          dispatch={dispatch}
        />

        {/*  <Route path="/home" component={Home} /> */}
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Login} user={user} />
      </Switch>
    </Router>
  );
};
const mapStateToProps = state => {
return { userAuth: state.userAuth };
};
export default connect(mapStateToProps)(App);
