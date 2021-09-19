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

    console.log(user);

    return <>
        <Grid container spacing={3} justifyContent="center">
            <Grid
                item
                lg={4}>
                <button class="button" >
                    <span>Edit User</span>
                </button>

                <button class="button" >
                    <span>Orders</span>
                </button>

            </Grid>
            <Grid
                item
                lg={6}>
                    <p>User Name: {user?.username}</p>
                    <p>Role: {user?.role}</p>
                    <p>First Name: {user?.firstname}</p>
                    <p>Last Name: {user?.lastname}</p>
                    <p>Email: {user?.email}</p>
                    <p>Phone: {user?.phone}</p>
            </Grid>
        </Grid>
    </>
}