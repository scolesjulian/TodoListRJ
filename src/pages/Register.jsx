import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div style={{ padding: 170 }}>
      <h1 align="center">Wellcome to register !!</h1>
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
            <Link to="/login">
              <button type="submit" className="btn btn-sm btn-success">
                Register
              </button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Register;
