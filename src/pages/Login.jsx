import React from "react";
import { Grid, Paper } from "@material-ui/core";

const Login = () => {
  return (
    <div style={{ padding: 170 }}>
      <h1 align="center">Wellcome to Login!!</h1>
      <hr />
      <Paper>
        <Grid container spacing={3} direction={"column"} alignItems={"center"}>
          <div className="mb-3">
            <label className="form-label">UserName</label>
            <input
              type="text"
              placeHolder="Insert UserName here"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeHolder="Insert Password here"
              className="form-control"
            />
          </div>
          <Grid item xs={12}>
            <button type="submit" className="btn btn-sm btn-success">
              Login
            </button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
