import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { red } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UseDataApi from "../hooks/UseDataApi";

const API_URL =
  "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function WeatherWidget(props) {
  const classes = useStyles();
  const [dataState] = UseDataApi(API_URL);

  const { data, isFethcing, isError, errorMessage } = dataState;
  // console.log(data);
  // console.log(isFethcing);
  if (isError) {
    return (
      <Card className={classes.root}>
        <CardHeader
          action={<IconButton aria-label="settings" />}
          title={errorMessage.name}
          subheader={errorMessage.message}
        />
        <CardContent />
      </Card>
    );
  }

  return (
    <Card className={classes.root}>
      {isFethcing ? (
        <p>Fetching data...</p>
      ) : (
        <>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Bekasi, West Java"
            subheader={data.init}
          />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Grid container spacing={1}>
              {data.map(row => (
                <Grid item xs>
                  <Paper className={classes.paper}>xs</Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
          <CardActions disableSpacing>
            <Link color="primary" href="#" onClick={preventDefault}>
              Data from BMKG | Updated 7 minutes ago
            </Link>
          </CardActions>
        </>
      )}
    </Card>
  );
}
