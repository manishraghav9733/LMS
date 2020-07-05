import React, { useEffect } from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login";
import MenuIndex from "./Menu";

import { loginUser } from "../actions/authActions";
import history from "../history";
import { connect } from "react-redux";
import DashboardIndex from "./dashboard";
import NotFound from "./NotFound";
import LeadsIndex from "./allLeads/LeadsIndex";
import AddManager from "./manager/AddManager";
import ManagerList from "./manager/ManagerList";

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
          <MenuIndex>
            <Component {...props} />
          </MenuIndex>
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

const Routing = (props) => {
  const dispatch = useDispatch();
  //const user = useSelector(state => state.userAuth);
  const user = props.userAuth;

  // console.log(props.userAuth.isSignedIn);
  return (
    <div>
      <React.Fragment>
        <Switch>
          <PrivateRoute
            path="/dashboard"
            exact
            component={DashboardIndex}
            user={user}
            dispatch={dispatch}
          />
          <PrivateRoute
            path="/all-leads"
            exact
            component={LeadsIndex}
            user={user}
            dispatch={dispatch}
          />
          <PrivateRoute
            path="/new-leads"
            exact
            component={NotFound}
            user={user}
            dispatch={dispatch}
          />

          <PrivateRoute
            path="/manager/add-manager"
            exact
            component={AddManager}
            user={user}
            dispatch={dispatch}
          />
          <PrivateRoute
            path="/manager/list"
            exact
            component={ManagerList}
            user={user}
            dispatch={dispatch}
          />

          {/*  <Route path="/home" component={Home} /> */}
          {/*  <Route path="/login" component={Login} /> */}
          <Route path="/" exact component={Login} user={user} />
        </Switch>
      </React.Fragment>
      <Route path="/login" render={() => <Login cookies={props.cookies} />} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return { userAuth: state.userAuth };
};
export default connect(mapStateToProps)(Routing);
