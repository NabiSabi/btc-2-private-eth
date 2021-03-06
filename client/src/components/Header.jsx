import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, IconButton, Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import logo from "./logo.svg";
import AboutDialog from "./AboutDialogs";
import GitHubIcon from "@material-ui/icons/GitHub";
import AccountChip from "./AccountChip";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  logo: {
    padding: 12,
    width: 64,
    height: 64,
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.root}>
        <img className={classes.logo} src={logo} alt="pRamp logo" />
        <Grid container spacing={2} justify="flex-end" alignItems="center">
          <Hidden xsDown>
            <Grid item>
              <AccountChip />
            </Grid>
          </Hidden>
          <Grid item>
            <AboutDialog />
          </Grid>
          <Grid item>
            <IconButton
              color="default"
              component={Link}
              href="https://github.com/TSnark/btc-2-private-eth"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}
