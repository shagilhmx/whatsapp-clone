import React, { Fragment } from "react";
import SignIn from "./containers/signIn/SignIn";
import "./index.css";

const index = () => {
  return (
    <Fragment>
      <div className="mobileView">
        <SignIn />
      </div>
      <div className="view"></div>
    </Fragment>
  );
};

export default index;
