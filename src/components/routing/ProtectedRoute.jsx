import React from 'react';
import { Route, Redirect } from "react-router";
 import { checkSession } from "../helpers/globalHelpers/GlobalHelpersFunction";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // check for user authentication status
  var isAuthenticated = checkSession();
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;