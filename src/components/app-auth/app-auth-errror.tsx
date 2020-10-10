import React from "react";
import { Alert } from "@material-ui/lab";
import { connect } from "react-redux";

import { IError } from "../../models/IAuth";

const AppAuthError: React.FC<{ errorSignIn: IError }> = ({ errorSignIn }) => {
  if (!errorSignIn.isShow) {
    return null;
  }
  return <Alert severity="error">{errorSignIn.text}</Alert>;
};

const mapStateToProps = (state: any) => {
  return {
    errorSignIn: state.auth.errorSignIn,
  };
};

export default connect(mapStateToProps)(AppAuthError);
