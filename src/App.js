import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import FormControlledLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Menu from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, orange } from "@material-ui/core/colors";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "10 50px",
    fontSize: 24,
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      marginTop: "15px",
      fontSize: 35,
    },
  },
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: orange[800],
    },
  },
});

function ButtonStyled(props) {
  const classes = useStyles();
  return (
    <Button className={classes.root} style={props.style}>
      {props.text}
    </Button>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <ToolBar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant="h6">MUI Theme</Typography>
                <ButtonStyled text="Login" style={{ padding: "5 20px", fontSize: 14, marginLeft: "80px" }} />
              </ToolBar>
            </AppBar>
            <Typography variant="h2">MUI CheatSheet</Typography>
            <Typography variant="subtitle2">Remember how to use Material UI</Typography>
            <TextField variant="outlined" placeholder="TextField" style={{ marginTop: "15px" }} />
            <br />
            <TextField variant="outlined" type="date" />
            <br />
            <CheckboxEx />
            <br />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />} size="small" style={{ fontSize: 14 }}>
                &nbsp; Save &nbsp;
              </Button>
              <Button startIcon={<DeleteIcon />} color="primary" style={{ fontSize: 14 }}>
                Delete
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
            <TextField variant="filled" type="time" label="Tempo" placeholder="Time." />
            <br />
            <ButtonStyled text="Enter" />
            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%", marginTop: "30px", marginBottom: "30px" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%", marginTop: "30px", marginBottom: "30px" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%", marginTop: "30px", marginBottom: "30px" }} />
              </Grid>
            </Grid>
            <Grid container spacing={2} justify="center">
              <Grid item xs={12} sm={6}>
                <Paper style={{ height: 75, width: "100%", marginTop: "30px", marginBottom: "30px" }} />
              </Grid>
            </Grid>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

const CheckboxEx = () => {
  const [checked, setChecked] = useState(false);
  return (
    <FormControlledLabel
      control={
        <div>
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<DeleteIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            color="secondary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      }
      label="Check........1"
    />
  );
};

export default App;
