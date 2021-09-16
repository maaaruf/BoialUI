import { useSelector } from "react-redux";
import { Route } from "react-router";

export default function ProtectedRoutes ({children}){
    const token = useSelector(store => store.UserInfoStore.token);

    return (
        <Route />
    );
}