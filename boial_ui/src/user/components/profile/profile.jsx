import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from "../../../store/action/userActions";

export default function Profile() {
    const user = useSelector(store => store.CurrentUserStore.data);
    const dispatch = useDispatch();

    useState(() => {
        dispatch(getCurrentUser());
    });

    console.log(user);

    return <>

        <p>User Name: {user?.username}</p>
        <p>Role: {user?.role}</p>
        <p>First Name: {user?.firstname}</p>
        <p>Last Name: {user?.lastname}</p>
        <p>Email: {user?.email}</p>
        <p>Phone: {user?.phone}</p>

    </>
}