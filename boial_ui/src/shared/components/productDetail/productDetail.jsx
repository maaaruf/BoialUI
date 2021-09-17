import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getProductAction } from "../../../store/action/productAction";
import { BASE_URL } from "../../../utils/constants";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export function ProductDetail({product}) {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    useState(() => {
        dispatch(getProductAction());
    }, [product]);
    
    return (
        <>
            <Grid container spacing={3} justifyContent="center">
                <Grid item lg={8} >
                    <Grid
                        item
                        lg={4}
                        >

                        <img style={{ width: "100%", border: "1px solid" }} src={`${BASE_URL}/files/1631642699320_233162.jpeg`} alt="Italian Trulli" />

                    </Grid>
                    <Grid
                        item
                        lg={8}
                    >
                        


                    </Grid>


                </Grid>
            </Grid>
        </>
    );
}