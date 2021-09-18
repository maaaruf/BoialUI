import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { LOGIN } from "../utils/constants";

export default function ProtectedAdminRoute ({children}){
    const token = useSelector(store => store.UserInfoStore.token);
    return (
        <Route render={()=>(token != null)? children:<Redirect to={LOGIN}/>}/>
    );
}