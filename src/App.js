import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import React from 'react';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6b8b, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '10px 30px'
  }
})

const theme = createMuiTheme({
  typography:{
    h2:{
      fontSize: 36,
      marginBottom:15,
    }
  },
  palette:{
    primary:{
      main: green[400],
    },
    secondary:{
      main:orange[400]
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test STyled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        >
        </Checkbox>
      }
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Typography variant="h2" component="div">Welcome to MUI</Typography>
          <Typography variant="subtitle1">Learn how to use Material Ui</Typography>
          <ButtonStyled />
          <TextField
            variant="outlined"
            color="secondary"
            type="eail"
            label="The Time"
            placeholder="test@test.com">
          </TextField>
          <CheckboxExample></CheckboxExample>
          <ButtonGroup
            variant="contained"
            color="primary">
            <Button onClick={() => alert('Hello')} href="#"
              startIcon={<SaveIcon />}>
              Save
        </Button>
            <Button onClick={() => alert('Hello')} href="#"
              startIcon={<DeleteIcon />}>
              Discard
        </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
