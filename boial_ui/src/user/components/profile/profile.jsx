import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from "../../../store/action/userActions";

export default function Profile() {
    const user = useSelector(store=> store.CurrentUserStore.data);
    const dispatch = useDispatch();

    useState(()=> {
        dispatch(getCurrentUser());
    });

    return <>
        <Grid container spacing={3} justifyContent="center">
            <Grid
                item
                lg={4}>
                <button class="button" >
                    <span>Login</span>
                </button>

                <button class="button" >
                    <span>Login</span>
                </button>

            </Grid>
            <Grid
                item
                lg={6}>

                

            </Grid>
        </Grid>
    </>
}