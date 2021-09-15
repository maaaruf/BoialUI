import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createCategoryAction } from '../../../store/action/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../../../store/actionType';
import { useState } from 'react';
import { toastNotify } from '../../../utils/helpers/toastHelper';

const useStyles = makeStyles((theme) => ({

    textField: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5)
    },
}));

export default function CreateCategory() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [category, setCategory] = useState({ name: "", description: "" });

    const updateCategory = (property, value) => {
        setCategory(category => ({ ...category, [property]: value }));
        console.log(category);
    }

    const createCategoryHandler = (e) => {
        e.preventDefault();
        console.log(category, "category from Create Category page ========");

        dispatch(createCategoryAction(category));
    }

    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid
                item
                lg={6}>

                <form className={classes.root} noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="Category Name" variant="outlined" fullWidth onChange={e => updateCategory("name", e.target.value)} />
                    <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth onChange={e => updateCategory("description", e.target.value)} />

                    <button class="button" onClick={(e) => createCategoryHandler(e)}>
                        <span>Create Category</span>
                    </button>
                </form>
            </Grid>
        </Grid>
    );
}