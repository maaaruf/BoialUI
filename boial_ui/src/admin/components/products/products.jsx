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
import { loadCategoriesAction } from '../../../store/action/categoryAction';
import { Button, ButtonGroup, Modal } from '@material-ui/core';
import EditCategory from '../categories/editCategory';
import { loadProductsAction } from '../../../store/action/productAction';

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

function createData(id, name, description) {
    return { id, name, description };
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

export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector((store) => store.ProductsStore.data);
    const classes = useStyles();

    useEffect(() => {
        dispatch(loadProductsAction()); 
    }, []);

    console.log(products, "products from products page");

    return (
        <>
            <p>Products</p>
            <br />

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell align="left">Title</StyledTableCell>
                            <StyledTableCell align="right">Stock</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Description</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row._id}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.title}</StyledTableCell>
                                <StyledTableCell align="right">{row.stock}</StyledTableCell>
                                <StyledTableCell align="right">{row.price}</StyledTableCell>
                                <StyledTableCell align="right">{row.description}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                        <EditCategory categoryId = {row._id}/>
                                        <Button>Delete</Button>
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