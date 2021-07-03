import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.divider}`
  },
  papers: {
    padding: theme.spacing(1),
    fontSize: 12,
    borderRadius: 2,
    color: theme.palette.text.secondary,
    backgroundColor: "white",
    marginTop: 20,
    border: `1px solid ${theme.palette.divider}`
  },
  details: {
    padding: theme.spacing(8),
    fontSize: 12,
    borderRadius: 2,
    color: theme.palette.text.secondary,
    backgroundColor: "white",
    border: `1px solid ${theme.palette.divider}`
  },
  button: {
    borderRadius: 10
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} elevation={0}>
          <Paper className={classes.paper}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={handleClickOpen}
            >
              I Understand and Accept
            </Button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Agree by our terms and conditions"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.papers}>Rules</Paper>
        <Paper className={classes.details}>Name</Paper>
      </Grid>
    </div>
  );
}
