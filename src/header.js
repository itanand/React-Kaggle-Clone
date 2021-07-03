import { Grid, AppBar, Toolbar } from "@material-ui/core";

export default function Header() {
  return (
    <Grid container className="gridRoot">
      <AppBar color="inherit">
        <Toolbar>
          <Grid container className="headerButtonsGrid"></Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
