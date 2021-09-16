import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, ButtonGroup, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editCategoryAction, getCategoryAction } from '../../../store/action/categoryAction';
import { Category } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function EditCategory({categoryId}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const existingCategory = useSelector((store) => store.SingleCategoryStore.data);
    const dispatch = useDispatch();
    const [editedCategory, setEditedCategory] = useState({ _id: existingCategory?._id, name: existingCategory?.name, description: existingCategory?.description });

    useEffect(() => {
        setEditedCategory(existingCategory);
    }, [existingCategory]);

    const handleOpen = () => {
        dispatch(getCategoryAction(categoryId));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateEditedCategory = (property, value) => {
        setEditedCategory(editedCategory => ({...editedCategory, [property] : value }));
        console.log(editedCategory);
    }

    const editCategory = (e) => {
        e.preventDefault();
        dispatch(editCategoryAction(editedCategory));
        console.log("Edit category called ");
        setOpen(false);
    }
    console.log(editedCategory, "editedCategory");
    return (
        <div>
            <Button onClick={handleOpen}>Edit</Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Category Name" value = {editedCategory.name} variant="outlined" fullWidth onChange = {(e)=>{updateEditedCategory("name", e.target.value)}}/>
                            <TextField id="outlined-basic" label="Description" value = {editedCategory.description}  variant="outlined" fullWidth  onChange = {(e)=>{updateEditedCategory("description", e.target.value)}}/>

                            <button class="button" onClick = {(e) => editCategory(e)} >
                                <span>Update Category</span>
                            </button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}