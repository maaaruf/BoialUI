import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createProductAction } from '../../../store/action/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../../../store/actionType';
import { useState } from 'react';
import { toastNotify } from '../../../utils/helpers/toastHelper';
import FileBase64 from "react-file-base64";
import { toast } from 'react-toastify';
import { SUCCESSFUL } from '../../../utils/constants';
import { loadCategoriesAction } from '../../../store/action/categoryAction';


const useStyles = makeStyles((theme) => ({

  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5)
  },
}));

export default function CreateProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cat = useSelector((store) => store.categoryStore);
  console.log(cat, "category from selector");
  
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    image: "",
    stock: 0,
    category: {
      _id: "6142e6bf100eb645a877824f",
    }
  });

  useEffect(()=>{
    dispatch(loadCategoriesAction());
  },[]);

  const updateProduct = (property, value) => {

    setProduct(product => ({ ...product, [property]: value }));
    console.log(product);
  }

  const createProductHandler = (e) => {
    e.preventDefault();
    product.price = parseInt(product.price);
    product.stock = parseInt(product.stock);
    console.log(product, "product from Create product page ========");

    console.log(cat, "category from selector");
    dispatch(createProductAction(product));
  }

  const handleImage = (e) => {
    setProduct({ ...product, image: e.base64 });
    toastNotify("Product Image is ready", SUCCESSFUL);
  };

  

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid
        item
        lg={6}>

        <form className={classes.root} noValidate autoComplete="off">

          <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth onChange={e => updateProduct("title", e.target.value)} />

          <TextField id="outlined-basic" label="description" variant="outlined" fullWidth onChange={e => updateProduct("description", e.target.value)} />
          <div>
            <FileBase64 onDone={handleImage} multiple={false} />
          </div>
          <TextField id="outlined-basic" label="stock" variant="outlined" onChange={e => updateProduct("stock", e.target.value)} />
          <TextField id="outlined-basic" label="price" variant="outlined" onChange={e => updateProduct("price", e.target.value)} />

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

            <div>
              <button class="button" onClick={(e) => createProductHandler(e)}>
                <span>Create Product</span>
              </button>
            </div>

          </FormControl>
        </form>
      </Grid>
    </Grid>



  );
}