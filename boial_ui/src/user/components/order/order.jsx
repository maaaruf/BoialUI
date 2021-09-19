import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCategoryAction, loadCategoriesAction } from '../../../store/action/categoryAction';
import { Button, ButtonGroup, Modal, Grid } from '@material-ui/core';
import { cancelOrderAction, loadOrderAction } from '../../../store/action/orderAction';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

export default function Order() {
    const dispatch = useDispatch();
    const orders = useSelector((store) => store.OrderStore.data);
    const classes = useStyles();

    useEffect(() => {
        dispatch(loadOrderAction());
        console.log("Order loading called");
    }, []);

    const cancelOrder = (id) => {
        dispatch(cancelOrderAction(id));
    }

    return (
        <>
            <Grid container spacing={3} justifyContent="center">
                <Grid
                    item
                    lg={8}>
                    <p>Orders</p>
                    <br />

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Id</StyledTableCell>
                                    <StyledTableCell align="center">Date</StyledTableCell>
                                    <StyledTableCell align="center">Status</StyledTableCell>
                                    <StyledTableCell align="center">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders?.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row._id}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.date}</StyledTableCell>
                                        <StyledTableCell align="center">{
                                            row.status === 0 ? 'Pending' :
                                                row.status === 1 ? 'Confirmed' :
                                                    'Canceled'
                                        }</StyledTableCell>

                                        <StyledTableCell align="center">
                                            {row.status !== 0 ?
                                                <Button variant="outlined" color="primary" disabled onClick={() => cancelOrder(row._id)}>Cancel Order</Button> :
                                                <Button variant="outlined" color="primary" onClick={() => cancelOrder(row._id)}>Cancel Order</Button>
                                            }
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>
        </>
    );
}