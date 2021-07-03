import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 2,
    color: theme.palette.text.Primary,
    backgroundColor: theme.palette.text.Secondary
  },
  text: {
    padding: theme.spacing(4)
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} elevation={2}>
          <Paper className={classes.paper}>Data Description</Paper>
        </Grid>
      </Grid>
      <Typography className={classes.text}>
        In this competition, we are identifying and localizing COVID-19
        abnormalities on chest radiographs. This is an object detection and
        classification problem. For each test image, you will be predicting a
        bounding box and class for all findings. If you predict that there are
        no findings, you should create a prediction of "none 1 0 0 1 1" ("none"
        is the class ID for no finding, and this provides a one-pixel bounding
        box with a confidence of 1.0).
      </Typography>
    </div>
  );
}
