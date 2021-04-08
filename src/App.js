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

function CheckboxExample(){
  const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel
    control={
      <Checkbox
        checked={checked}
        icon={<SaveIcon/>}
        checkedIcon={<SaveIcon/>}
        onChange={(e)=>setChecked(e.target.checked)}
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
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
