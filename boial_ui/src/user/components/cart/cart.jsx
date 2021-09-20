import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCategoryAction, loadCategoriesAction } from '../../../store/action/categoryAction';
import { Button, ButtonGroup, Modal } from '@material-ui/core';
import EditCategory from '../../../admin/components/categories/editCategory';
import { Grid } from '@material-ui/core';
import { addToCartAction, checkOutAction, loadCartAction } from '../../../store/action/cartActions';
import { toastNotify } from '../../../utils/helpers/toastHelper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(_id, name, description) {
    return { _id, name, description };
}

let rows = [
    createData('1', 'Book', 6.0, 24, 4.0),
    createData('2', 'Cloth', 9.0, 37, 4.3),
    createData('3', 'Medicine', 16.0, 24, 6.0),
    createData('4', 'Electronics', 3.7, 67, 4.3)
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.CartStore.data);
    const classes = useStyles();

    useEffect(() => {
        dispatch(loadCartAction());
    }, []);

    const increaseQuantity = (e, productId, existingQuantity) => {
        e.preventDefault();
        dispatch(addToCartAction(existingQuantity + 1, productId));
    }

    const decreaseQuantity = (e, productId, existingQuantity) => {
        e.preventDefault();
        console.log(existingQuantity + 1, "==========================");
        dispatch(addToCartAction(existingQuantity - 1, productId));
    }

    const checkOut = () => {
        dispatch(checkOutAction());
    }


    return (
        <>
            <p>Cart</p>
            <br />

            <Button onClick={checkOut}> Check Out</Button>
            {/* <p>Total Price: {}</p> */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Title</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
                            <StyledTableCell align="left">Unit Price</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems?.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.productId.title}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                                <StyledTableCell align="left">{row.productId.price}</StyledTableCell>
                                <StyledTableCell align="left">{row.productId.price * row.quantity}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                        <Button onClick={(e) => decreaseQuantity(e, row.productId._id, row.quantity)}>-</Button>
                                        <Button onClick={(e) => increaseQuantity(e, row.productId._id, row.quantity)}>+</Button>
                                    </ButtonGroup>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}