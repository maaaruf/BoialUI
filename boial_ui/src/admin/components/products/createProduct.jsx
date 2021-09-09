import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({

  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5)
  },
}));

export default function CreateProduct() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid
        item
        lg={6}>

        <form className={classes.root} noValidate autoComplete="off">

          <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth />

          <TextField id="outlined-basic" label="description" variant="outlined" fullWidth />
          <TextField id="outlined-basic" label="image" variant="outlined" fullWidth />
          <TextField id="outlined-basic" label="stock" variant="outlined" />
          <TextField id="outlined-basic" label="price" variant="outlined" />
          <TextField id="outlined-basic" label="category" variant="outlined" />

          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              //value={10}
              // onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>


        </form>
      </Grid>
    </Grid>



  );
}