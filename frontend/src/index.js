import React, { Fragment } from "react";
import SignIn from "./containers/signIn/SignIn";
import "./index.css";

const index = () => {
  return (
    <Fragment>
      Hi
      <div className="mobileView">
        <SignIn />
        Hi
      </div>
      <div className="view"></div>
    </Fragment>
  );
};

export default index;
