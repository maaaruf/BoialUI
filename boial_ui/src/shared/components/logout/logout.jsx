import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { signOut } from "../../../store/action/signOutAction";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../../store/actionType";

export default function Logout() {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(signOut());
    },[]);

    return(
        <Redirect to="home"/>
    );
}