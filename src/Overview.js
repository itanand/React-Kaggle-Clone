import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import { Tab, Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 800,
    border: `1px solid ${theme.palette.divider}`
  },
  tabs: {
    border: `1px solid ${theme.palette.divider}`
  },
  typo: {
    width: 1040,
    margin: 10
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Description" {...a11yProps(0)} />
        <Tab label="TImeline" {...a11yProps(1)} />
        <Tab label="Prizes" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography className={classes.typo}>
          Five times more deadly than the flu, COVID-19 causes significant
          morbidity and mortality. Like other pneumonias, pulmonary infection
          <br />
          with COVID-19 results in inflammation and fluid in the lungs. COVID-19
          looks very similar to other viral and bacterial pneumonias on chest
          radiographs, which makes it difficult to diagnose. <br /> <br />
          Your computer vision model to detect and localize COVID-19 would help
          doctors provide a quick and confident diagnosis. As a result, patients
          could get the right treatment before the most severe effects of the
          virus take hold.
        </Typography>
        <Grid container>
          <Grid item xs={8}>
            <Paper className={classes.paper} elevation={0}>
              Currently, COVID-19 can be diagnosed via polymerase chain reaction
              to detect genetic material from the virus or chest radiograph.
              However, <br />
              it can take a few hours and sometimes days before the molecular
              test results are back.
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={0}>
              Name
            </Paper>
          </Grid>
        </Grid>
        <Typography className={classes.typo}>
          As the leading healthcare organization in their field, the Society for
          Imaging Informatics in Medicine (SIIM)'s mission is to advance medical
          imaging informatics through education, research, and innovation. SIIM
          has partnered with the Foundation for the Promotion of Health and
          Biomedical Research of Valencia Region (FISABIO), Medical Imaging
          Databank of the Valencia Region (BIMCV) and the Radiological Society
          of North America (RSNA) for this competition. <br />
          <br /> In this competition, you’ll identify and localize COVID-19
          abnormalities on chest radiographs. In particular, you'll categorize
          the radiographs as negative for pneumonia or typical, indeterminate,
          or atypical for COVID-19. You and your model will work with imaging
          data and annotations from a group of radiologists.
          <br />
          <br />
          If successful, you'll help radiologists diagnose the millions of
          COVID-19 patients more confidently and quickly. This will also enable
          doctors to see the extent of the disease and help them make decisions
          regarding treatment. Depending upon severity, affected patients may
          need hospitalization, admission into an intensive care unit, or
          supportive therapies like mechanical ventilation. As a result of
          better diagnosis, more patients will quickly receive the best care for
          their condition, which could mitigate the most severe effects of the
          virus.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
