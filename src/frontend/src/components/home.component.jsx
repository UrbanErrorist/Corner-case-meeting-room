import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import "./home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function HomeComponent(props) {
  const classes = useStyles();

  // noinspection HtmlUnknownTarget
  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />

        <div class="wrapper">
          <div>
            <header class="site-header"></header>

            <main>
              <div class="home-page">
                <div class="block">
                  <h1>Created for Corner Case Technologies.</h1>
                  <p class="intro">
                    Welcome to Marzipan, a Meeting Rooms Reservation App.
                    <br />
                    <br />
                    Signup to get started or Login if you already have an
                    account. Read the documentation to create and reserve rooms.
                    <br />
                    <br />
                    The API can be accessed at <Link href="/api">/api</Link>.
                  </p>
                  <br />
                  <div id="buttonpadding">
                    <div className={classes.heroButtons}>
                      <Grid container spacing={3} justify="left">
                        <Grid item>
                          <Button
                            id="custombutton"
                            variant="contained"
                            color="primary"
                            onClick={() => {
                              props.history.push("/signup");
                            }}
                          >
                            Signup
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="outlined"
                            color="green"
                            onClick={() => {
                              props.history.push("/login");
                            }}
                          >
                            Login
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
