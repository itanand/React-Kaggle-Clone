import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Overview from "./Overview";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Data from "./Data";
import Leaderboad from "./Leaderboad";
import Rules from "./Rules";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 80
  },
  paper: {
    padding: theme.spacing(10, 2),
    fontSize: 20,
    borderRadius: 2,
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.text.Primary
  },
  papers: {
    padding: theme.spacing(1),
    fontSize: 12,
    borderRadius: 2,
    color: theme.palette.text.secondary,
    backgroundColor: "white",
    border: `1px solid ${theme.palette.divider}`
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

export default function Competition() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Mesh Competition</Paper>
        </Grid>
      </Grid>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Data" {...a11yProps(1)} />
          <Tab label="Leaderboad" {...a11yProps(2)} />
          <Tab label="Rules" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid item xs={12}>
          <Paper className={classes.papers}>Overview</Paper>
        </Grid>
        <Overview />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Data />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Leaderboad />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Rules />
      </TabPanel>
    </div>
  );
}
