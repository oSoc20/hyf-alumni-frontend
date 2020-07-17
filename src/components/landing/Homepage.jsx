import React, { useState } from "react";
import { Redirect, Router, Switch } from "react-router";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Login from "../login/Login";
import Signup from "../signup/Signup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Homepage() {
  let history = useHistory();
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);
  const homePage = (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hackyourfuture Alumni Platform
          </Typography>
          <Button onClick={() => setLoggedIn(true)} color="inherit">
            Login
          </Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );

  return <>{loggedIn ? history.push("/login") : homePage}</>;
}
